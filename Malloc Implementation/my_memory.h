#ifndef MY_MEMORY_H
#define MY_MEMORY_H

#include "interface.h"

// Declare your own data structures and functions here...

typedef struct header 
{
    size_t size;
} header;

typedef struct free_list_node {
    int size;
    struct free_list_node* next;
    struct free_list_node* prev;
    void* start_pointer;
    struct header block_h;

} free_list_node;

typedef struct free_list {
    int count;
    struct free_list_node* head;
    struct free_list_node* tail;
} free_list;

typedef struct buddy_node {
    struct free_list* list;
    int size;
    struct buddy_node* next;
    struct buddy_node* prev;
} buddy_node;

typedef struct buddy_list{
    int count;
    struct buddy_node* head;
    struct buddy_node* tail;
} buddy_list;


typedef struct slab_table{
    int type;
    int size;
    int obj;
    int used;
    int array [64];
    struct slab_table* next;
    struct slab_table* prev;
    void* start_add;
} slab_table;

typedef struct slab_table_list{
    struct slab_table* head;
    struct slab_table* tail;
    int count;
} slab_table_list;

buddy_list* innit_buddy_list(void *start_of_memory);
free_list* innit_free_list();
buddy_node* insert_buddy_node(buddy_list* list, int size);
free_list_node* insert_free_node(free_list* list, int size, void* start_pointer);
void print_buddy_list(buddy_list* list, void* sadd);
void print_free_list(free_list* list,void* sadd);
void* fit_check(buddy_list* list,int size);
void del_free_node(free_list* list, free_list_node* node);
void insert_free_node_to_buddy(buddy_list* main_list,int size,void* sadd);
void check_merge(buddy_list* main_list);
void sorted_add_to_free_list(free_list* list, free_list_node* node, void* start_pointer);
int rem_space_check(buddy_list* main_list, int size);
void* slab_alloc(slab_table_list* slab_list, buddy_list* main_list, int size);
void* new_table_entry(slab_table_list* slab_list, int size, void* s_add);
void insert_slab_table(slab_table_list* slab_list, slab_table* s_table);
void array_innit(int array[]);
void print_array(int array[]);
void empty_slab(slab_table_list* slab_list, void* ptr);
void check_to_remove_slab(slab_table_list* slab_list,buddy_list* main_list);
#endif
