<template>
  <div>
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <button v-on:click="addTodo">add</button>
    <Modal v-if="showModal" @close="showModal = false">
        <!--
        you can use custom content here to overwrite
        default content
        -->
        <h3 slot="header">경고!
            <span v-on:click="showModal = false">X</span>
        </h3>
        <p slot="body">아무것도 입력하지 않으셨습니다.</p>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue'

export default {
    data() {
        return {
            newTodoItem: "",
            showModal: false
        }
    },
    methods: {
        addTodo() {
            if (this.newTodoItem !== ''){
                this.$emit('addTodoItem', this.newTodoItem)
                this.clearInput();
            } else {
                this.showModal = !this.showModal;
            }
        },
        clearInput() {
            this.newTodoItem = '';
        }
    },
    components: {
        Modal
    }
}
</script>

<style scoped>
div {
    border: 1px solid #eaeaea;
    border-radius: 10px;
}
input{
    width: 80%;
    height:46px;
    border:none;
    border-radius: 10px;
    font-size:13px;
    text-indent: 20px;
}
input:focus {
    outline:none
}
button {
    width:20%;
    height:50px;
    margin-right:-4px;
    border:1px solid #eaeaea;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background:#eaeaea;
    cursor: pointer;
}
button:focus {
    outline:none
}
</style>