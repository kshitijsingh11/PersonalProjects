#include "my_memory.h"

// Memory allocator implementation
// Implement all other functions here...
int max_rem_spacd = MEMORY_SIZE;

int first_alloc = 0;
buddy_list* innit_buddy_list(void *start_of_memory){
    buddy_list* main_list = (buddy_list*)calloc(1,sizeof(buddy_list));
    int num = MIN_MEM_CHUNK_SIZE;
    
    while (main_list->count<=14) // 22 as 2^22 < max mem size < 2^23
    {
        //adding buddy nodes and making their free lists
        buddy_node* node = insert_buddy_node(main_list,num);
        node->list = innit_free_list();
        num = num*2;
    }
    insert_free_node(main_list->tail->list , main_list->tail->size, start_of_memory); // setting up so the last buddy node has one free node of max size at the start
    return main_list;
}

free_list* innit_free_list(){ // innitializing free list
    free_list* list = (free_list*)calloc(1,sizeof(free_list));
    list->count=0;
    return list;
}

buddy_node* insert_buddy_node(buddy_list* list, int size){ 
    buddy_node* new_node = calloc(1, sizeof(buddy_node));
    new_node->size = size;
    if (list->count==0)
    {
        list->count++;
        list->head = new_node;
        list->tail = new_node;
        return new_node;
    }

    // we just add to the tail now
    list->tail->next = new_node;
    new_node->prev = list->tail;
    list->tail = new_node;
    list->count++;
    return new_node;
}

free_list_node* insert_free_node(free_list* list, int size, void* start_pointer){
    free_list_node* new_node = calloc(1, sizeof(free_list_node));
    new_node->size = size;
    new_node->start_pointer = start_pointer;
    if (list->count==0)
    {
        list->count++;
        list->head = new_node;
        list->tail = new_node;
        return new_node;
    }

    list->tail->next = new_node;
    new_node->prev = list->tail;
    list->tail = new_node;
    list->count++;
    return new_node;
}

void print_buddy_list(buddy_list* list,void* sadd){ //helper function to print out the list while debugging
    buddy_node* curr = list->head;
    int order = 0;
    
    while (curr!=NULL)
    {
        printf("%d : Block Size %d -->\n",order, curr->size);
        printf("free list\n");
        print_free_list(curr->list,sadd);
        printf("next buddy node\n");
        order++;
        curr = curr->next;
    }
}

void print_free_list(free_list* list,void* sadd){ //helper function to print out the list while debugging
    free_list_node* curr = list->head;
    int order = 0;
    
    while (curr!=NULL)
    {
        printf("%d : Node Size %d with add %d -->\n",order, curr->size, (int)(curr->start_pointer - sadd));
        order++;
        curr = curr->next;
    }
}

void del_free_node(free_list* list, free_list_node* node){ // del function for our free linked list
    if (list->count==0)
    {
        return;
    }
    if (list->count==1)
    {
        list->head=NULL;
        list->tail = NULL;
        list->count=0;
        return;
    }
    if (node==list->head)
    {
        free_list_node* temp = list->head->next;
        list->head->next = NULL;
        temp->prev = NULL;
        list->head = temp;
        list->count--;
        return;
    }
    
    if (node==list->tail)
    {
        free_list_node* temp = list->tail->prev;
        temp->next = NULL;
        list->tail->prev = NULL;
        list->tail = temp;
        list->count--;
        return;
    }
    free_list_node* curr = list->head;
    while (curr!=NULL)
    {
        if (curr==node)
        {
            free_list_node* temp_next = list->head->next;
            free_list_node* temp_prev = list->tail->prev;
            node->prev = NULL;
            node->next = NULL;
            temp_prev->next = temp_next;
            temp_next->prev = temp_prev;
            list->count--;
            return;
        }
        curr=curr->next;
    }
}

// fit check, check for accomadation and splits blocks if possible
void* fit_check(buddy_list* list,int size){
    buddy_node* curr = list->head;
    size = size+8;
    while (curr->size<size || curr->list->count==0) //looping till we find a non empty buddy node
    {
        curr = curr->next;
    }
    
    if (curr->size == MIN_MEM_CHUNK_SIZE) // if we are in the MIN block and cant split further
    {
        header* h_pointer = curr->list->head->start_pointer;
        h_pointer->size= curr->size;
        void* ret = h_pointer+1;
        del_free_node(curr->list,curr->list->head);
        return ret;
    }
    else{
        while (curr->size/2 > size && curr->prev!=NULL)
        {
            free_list_node* temp = curr->list->head;
            //adding node to prevoius buddy node's list
            insert_free_node(curr->prev->list,curr->prev->size,curr->list->head->start_pointer);

            void* next_add = curr->list->head->start_pointer + curr->prev->size;
            insert_free_node(curr->prev->list,curr->prev->size,next_add);
            //deleting the big node as its split into 2 now
            del_free_node(curr->list,temp);
            //moving onto the previous node
            curr = curr->prev;
        }   
        header* h_pointer = curr->list->head->start_pointer; 
        h_pointer->size= curr->size;
        void* ret = h_pointer;
        del_free_node(curr->list,curr->list->head); // del the node from old buddy block
        ret = ret+8;
        return ret;
    }
    
}
// when a block is freed, adding it to our buddy list
void insert_free_node_to_buddy(buddy_list* main_list, int size,void* sadd){
    free_list_node* new_node = calloc(1, sizeof(free_list_node));
    new_node->size = size;
    new_node->start_pointer = sadd;

    buddy_node* curr = main_list->head;
    while (curr->size<size)
    {
        curr = curr->next;
    }
    sorted_add_to_free_list(curr->list,new_node,sadd);
}

void check_merge(buddy_list* main_list){
    buddy_node* curr = main_list->head;
    //if one of our buddy nodes has 2 free nodes we can combine and send it down
    while (curr!=NULL && curr != main_list->tail)
    {
        if (curr->list->count>1)
        {
            free_list_node* temp1 = curr->list->head;
            free_list_node* temp2 = temp1->next;
            while (temp2 != NULL)
            {
                if (((int)(temp2->start_pointer - temp1->start_pointer) == curr->size))
                {
                    insert_free_node_to_buddy(main_list,curr->next->size,temp1->start_pointer);
                    del_free_node(curr->list,temp1);
                    del_free_node(curr->list,temp2);
                    break;
                }
                else{
                    temp1 = temp2;
                    temp2 = temp2->next;
                }
            }
        }
        curr= curr->next;
    }
}
//makes sure that free list is in sorted order so its easier to merge them when required

void sorted_add_to_free_list(free_list* list, free_list_node* node, void* start_pointer){
    if (list->count == 0)
    {
        list->head = node;
        list->tail = node;
        node->next = NULL;
        node->prev = NULL;
        list->count++;
        return;
    }

    if (list->count==1)
    {
        if ((int)(list->head->start_pointer - node->start_pointer) < 0)
        {
            list->head->next = node;
            node->prev = list->head;
            list->tail = node;
            list->count++;
        }
        else{
            list->head->prev = node;
            node->next = list->head;
            list->head = node;
            list->count++;
        }
        return;
        
    }
    free_list_node* curr = list->head;
    while (curr!=NULL && ((int)(curr->start_pointer - node->start_pointer) < 0))
    {
        curr = curr->next;
    }
    if(curr==NULL){
        insert_free_node(list,node->size,start_pointer);
        return;
    }
    
    if (curr==list->head)
    {
        node->next = list->head;
        list->head->prev = node;
        list->count++;
        list->head = node;
        return;
    }
    
    free_list_node* temp_prev = curr->prev;
    temp_prev->next = node;
    curr->prev = node;
    node->next = curr;
    node->prev = temp_prev;
    list->count++;
    return;


}
// checks if allocation is possible
int rem_space_check(buddy_list* main_list,int size){
    buddy_node* curr = main_list->tail;
    while (curr!=NULL && curr->size >= size)
    {
        if (curr->list->count>0)
        {
            return 1;
        }
        curr = curr->prev;
    }
    if (curr == main_list->head && curr->list->count>0 && curr->size >size)
    {
        return 1;
    }
    

    return 0;
    
}
//our slab allocator, goes through the tables to see if its possible to add to an existing table, if not creates a new table
void* slab_alloc(slab_table_list* slab_list, buddy_list* main_list, int size){
    int all_size = 8 + ((8+size)*64);
    size = 8 + size;
    if (slab_list->count == 0)
    {
        if (rem_space_check(main_list,all_size)==0)
        {
            return (void*)-1;
        }
        //new table node in list
        void* s_add = fit_check(main_list,all_size);
        void* ret = new_table_entry(slab_list,size,s_add);
        return ret;
    }
    else{
        slab_table* curr = slab_list->head;
        while (curr!=NULL)
        {
            //if we have a slab table of the same size with space in it remaining
            if (curr->size == size && curr->used < 64)
            {
                int i = 0;
                while (curr->array[i]!=0)
                {
                    i=i+1;
                }
                
                int num = i;
                curr->array[i]=1;
                
                void* add = (void*)(curr->start_add + (num*curr->size));
                header* header = add;
                curr->used++;
                return (void*)(header+1);
            }
            curr = curr->next;
        }
        if (rem_space_check(main_list,all_size)==0)
        {
            return (void*)-1;
        }
        void* s_add = fit_check(main_list,all_size);
        void* ret = new_table_entry(slab_list,size,s_add);
        return ret;

         
    }
}
//insert function for a new table
void* new_table_entry(slab_table_list* slab_list, int size, void* s_add){
    slab_table* s_table = calloc(1,sizeof(slab_table));
    s_table->obj = 63;
    s_table->used = 1;
    s_table->start_add = s_add;
    s_table->size = size;
    array_innit(s_table->array);

    s_table->array[0]=1;

    header* header = s_add;
    header->size = size;
    insert_slab_table(slab_list, s_table); //inserts table into the slab_list
    return (void*)(s_add+8);
}
//insert function for adding a table to the list
void insert_slab_table(slab_table_list* slab_list, slab_table* s_table){
    if (slab_list->count==0)
    {
        slab_list->head = s_table;
        slab_list->tail = s_table;
        slab_list->count = 1;
        return;
    }
    //otherwise we just insert at the end of the list
    slab_list->tail->next = s_table;
    s_table->prev = slab_list->tail;
    slab_list->tail = s_table;
    slab_list->count++;
}
//innitializing our allocation array, since nothing is yet allocated making all entries 0
void array_innit(int array[]){
    for (int i = 0; i < 64; i++)
    {
        array[i] = 0;
    }
    
}
void print_array(int array[]){
    for (int i = 0; i < 64; i++)
    {
        printf("element[%d] = %d\n",i,array[i]);
    }
    
}
// frees the slab
void empty_slab(slab_table_list* slab_list, void* ptr){
    if (slab_list->count==0)
    {
        return;
    }
    slab_table* curr = slab_list->head;
    void* s_add = ptr-8;
    header* header = s_add;
    while (curr!=NULL){
        void* e_add = curr->start_add + (64*header->size);
        if (curr->size == header->size )
        {
            int num = (int)((s_add - curr->start_add)/curr->size);
            curr->used--;
            curr->array[num] = 0;
            return;
        }
        curr = curr->next;
    }


}
//check if a slab table is empty and removes it from the slab list
void check_to_remove_slab(slab_table_list* slab_list,buddy_list* main_list){
    slab_table* curr = slab_list->head;
    while (curr!=NULL)
    {
        if(curr->used==0){
            void* sadd = curr->start_add-8;
            header* head = sadd;
            int size = head->size;
            insert_free_node_to_buddy(main_list,size,sadd);
            check_merge(main_list);
        }
        curr = curr->next;
    }
    
}