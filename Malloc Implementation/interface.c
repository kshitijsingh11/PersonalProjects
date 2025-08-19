#include "interface.h"
#include "my_memory.h"

// Interface implementation
// Implement APIs here...

void* start;
buddy_list* main_list;
enum malloc_type m_type;
slab_table_list* slab_list;
void my_setup(enum malloc_type type, int mem_size, void *start_of_memory)
{
    //setting up our variables and innitialzing the required data structures
    main_list = innit_buddy_list(start_of_memory);
    start = start_of_memory;
    m_type = type;
    if (type==1){
        slab_list = calloc(1,sizeof(slab_table_list));
    }  

}

void *my_malloc(int size)
{
    if (m_type==0) //buddy allocation
    {
        if (rem_space_check(main_list,size+8)==0)
    {
        return (void*)-1;
    }
    
    return fit_check(main_list,size);
    }
    
    else{ // slab alloc
    return slab_alloc(slab_list,main_list,size);

    }
    
}

void my_free(void *ptr)
{    
    if (m_type==0)
    {
        void* sadd = ptr-8;
        header* head = sadd;
        int size = head->size;
        insert_free_node_to_buddy(main_list,size,sadd);
        check_merge(main_list);
    }
    else{
        empty_slab(slab_list,ptr);
        check_to_remove_slab(slab_list,main_list);
    }
    

}
