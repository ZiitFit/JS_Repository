<template>
    <div>
        <transition-group name="list" tag="ul">
            <li v-for="(todoItem, index) in this.storedTodoItems" v-bind:key="todoItem.item">
                <span class="checkBtn" v-bind:class="{textCompleted:todoItem.completed}" v-on:click="toggleComplete({todoItem, index})">체크</span>
                <span class="todolist_text" v-bind:class="{textCompleted:todoItem.completed}">{{ todoItem.item }}</span>
                <span class="btn_delete" v-on:click="removeTodo({todoItem, index})">삭제</span>
            </li>
        </transition-group>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
    methods: {
        ...mapMutations({
            removeTodo:'removeOneItem',
            toggleComplete: 'toggleOneItem'
        }),
        // eslint-disable-next-line no-unused-vars
        // removeTodo(todoItem, index) {
        //     // this.$emit('removeItem', todoItem, index);
        //     this.$store.commit('removeOneItem', {todoItem, index});
        // },
        // eslint-disable-next-line no-unused-vars
        // toggleComplete(todoItem, index) {
        //     // this.$emit('toggleItem', todoItem, index);
        //     this.$store.commit('toggleOneItem', {todoItem, index});
        // }
    },
    computed: {
        // todoItems() {
        //     return this.$store.getters.storedTodoItems
        // }
        ...mapGetters(['storedTodoItems'])
    }
}
</script>

<style scoped>
ul {
    padding-left:0;
}
li {
    position: relative;
    margin-bottom:10px;
    height: 48px;
    border: 1px solid #eaeaea;
    border-radius: 8px;
    line-height: 48px;
    list-style: none;
}
li span {
    position: absolute;
}
.checkBtn{
    left: 16px;
    font-size:14px;
    cursor:pointer;
}
.textCompleted{
    color:#888;
    text-decoration: line-through;
}
.todolist_text{
    left:60px;
}
.btn_delete {
    right: 30px;
    font-size:14px;
    cursor:pointer;
}

/* 리스트 아이템 트랜지션 효과 */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>