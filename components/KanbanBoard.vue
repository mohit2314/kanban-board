<script setup lang="ts">
import type { Column,Task } from "~~/types"
import draggable from "vuedraggable"

import { nanoid } from "nanoid";
const columns = ref<Column[]>([
    {
        id: nanoid(),
        title: "Backlog",
        tasks: [
            {
                id: nanoid(),
                createdAt: new Date(),
                title: "Task 1"
            },
            {
                id: nanoid(),
                createdAt: new Date(),
                title: "Task 2"
            }, {
                id: nanoid(),
                createdAt: new Date(),
                title: "Task 3"
            }
        ]
    },
    {
        id: nanoid(),
        title: "Selected for dev",
        tasks: [
            {
                id: nanoid(),
                createdAt: new Date(),
                title: "Task 1"
            },
            {
                id: nanoid(),
                createdAt: new Date(),
                title: "Task 2"
            }
        ]
    },
    {
        id: nanoid(),
        title: "In Progress",
        tasks: [
            {
                id: nanoid(),
                createdAt: new Date(),
                title: "Task 1"
            },
            {
                id: nanoid(),
                createdAt: new Date(),
                title: "Task 2"
            }
        ]
    },
    {
        id: nanoid(),
        title: "QA",
        tasks: [
            {
                id: nanoid(),
                createdAt: new Date(),
                title: "Task 1"
            }
        ]
    },
    {
        id: nanoid(),
        title: "Complete",
        tasks: [
            {
                id: nanoid(),
                createdAt: new Date(),
                title: "Task 1"
            },
        ]
    }
])

</script>

<template>
    <div class="flex gap-4 overflow-x-auto items-start">
        <draggable 
        v-model="columns" 
        group="columns" 
        item-key="id" 
        class="flex gap-4 overflow-x-auto items-start" 
        :animation="150"
        handle=".drag-handle"
        >
            <template #item="{element:column}:{element: Column}">
                <div class="column bg-gray-200 p-5 rounded min-w-[250px]">
            <header class="font-bold mb-4">
                <DragHandle />
                {{ column.title }}
            </header>
            <draggable 
        v-model="column.tasks" 
        group="tasks" 
        item-key="id" 
        :animation="150"
        handle=".drag-handle"
        >
    <template #item="{element:task}:{element: Task}">
        <KanbanBoardTask :task="task"></KanbanBoardTask>
    </template>
    </draggable>
           
            <footer>
                <button class="text-gray-500">+ Add a Card</button>
            </footer>
        </div>

            </template>
        </draggable>

    </div>
</template>