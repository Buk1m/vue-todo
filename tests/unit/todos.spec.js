import { shallowMount } from '@vue/test-utils'
import Todos from '@/components/Todos.vue'
import TodoItem from '@/components/TodoItem.vue'

describe('Todos.vue', () => {

    it('render TodoItem components for todos in property todos', () => {
        const wrapper = shallowMount(Todos, {
            propsData: { todos: [{ id: 1, completed: true, title: "make coffe!" }, { id: 2, completed: false, title: "give up" }] }
        });

        expect(wrapper.findAll(TodoItem).length).toBe(2);

    })
});
