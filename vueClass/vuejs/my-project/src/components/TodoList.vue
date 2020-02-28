<template>
    <div>
        <ul>
            <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item">
                <span class="checkBtn" v-bind:class="{textCompleted:todoItem.completed}" v-on:click="toggleComplete(todoItem, index)">체크</span>
                <span v-bind:class="{textCompleted:todoItem.completed}">{{ todoItem.item }}</span>
                <span v-on:click="removeTodo(todoItem, index)">삭제</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['propsdata'],
    methods: {
        // eslint-disable-next-line no-unused-vars
        removeTodo: function(todoItem, index) {
            this.$emit('removeItem', todoItem, index)
        },
        // eslint-disable-next-line no-unused-vars
        toggleComplete: function(todoItem, index) {
            todoItem.completed = !todoItem.completed
            localStorage.removeItem(todoItem.item)
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
        }
    }
}
</script>

<style>
.checkBtn{
    border:1px solid #333;
}
.textCompleted{
    color:#888;
    text-decoration: line-through;
}
</style>