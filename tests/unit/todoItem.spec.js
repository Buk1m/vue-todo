import { shallowMount } from '@vue/test-utils'
import TodoItem from '@/components/TodoItem.vue'

describe('TodoItem.vue', () => {
    it('check if del-todo event is emmited after delete button is clicked', () => {

        const wrapper = shallowMount(TodoItem, {
            attachToDocument: true,
            propsData: { todo: { id: 1, title: 'survive', completed: false } }
        })

        wrapper.find("button").trigger('click');

        expect(
            wrapper.emitted('del-todo').length
        ).toBe(1);

    }),
    
    it('check del-todo event data', () => {

        const wrapper = shallowMount(TodoItem, {
            attachToDocument: true,
            propsData: { todo: { id: 1, title: 'survive', completed: false } }
        });

        wrapper.find("button").trigger('click');

        expect(
            wrapper.emitted('del-todo')[0][0]
        ).toEqual(1);
    }),

    it('state is corresponding to todo.completed', () => {

        const wrapper = shallowMount(TodoItem, {
            propsData: { todo: { id: 2, title: 'finish tests', completed: true } }
        })

        expect(
            wrapper.find("[type='checkbox']").element.checked
        ).toBe(true);
    }),

    it('markComplete method changes todo.completed to true', () => {
        const wrapper = shallowMount(TodoItem, {
            propsData: { todo: { id: 2, title: 'finish tests', completed: false } }
        })
        wrapper.vm.markComplete(wrapper.vm.todo);
        expect(wrapper.vm.todo.completed).toBeTruthy();
    })
})
