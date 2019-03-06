import { shallowMount } from '@vue/test-utils'
import AddTodo from '@/components/AddTodo.vue'

describe('AddTodo.vue', () => {
  it('validation error is added to errors after submitting empty title', () => {

    let expectedError = "Title is required.";

    const wrapper = shallowMount(AddTodo, {
      attachToDocument: true
    })

    wrapper.find("[type='submit']").trigger('click')
    expect(wrapper.vm.errors.length).toBe(1);
    let resultError = wrapper.vm.errors[0];
    expect(resultError).toBe(expectedError);
    wrapper.destroy();
  })

  it('addTodo event is emmited after correct form submit', () => {

    const wrapper = shallowMount(AddTodo, {
      data: () => { return { title: 'Make my day awesome!' } }
    });

    wrapper.find("[type='submit']").trigger('submit')

    let expectedEvent = [{ completed: false, title: 'Make my day awesome!' }];

    expect(
      wrapper.emitted('addTodo').length
    ).toBe(1);

    expect(
      wrapper.emitted('addTodo')[0]
    ).toEqual(expectedEvent);

    wrapper.destroy();
  })

  it('event isn\'t emited with incorect form (empty title)', () => {

    const wrapper = shallowMount(AddTodo, {
      attachToDocument: true
    });

    wrapper.find("[type='submit']").trigger('submit')

    expect(
      wrapper.emitted('addTodo')
    ).toBe(undefined);

    wrapper.destroy();
  })

  it('error message is rendered after incorrect submit', () => {
    const wrapper = shallowMount(AddTodo, {
      attachToDocument: true
    });

    expect(wrapper.find('.alert-danger').exists()).toBeFalsy();

    wrapper.find("[type='submit']").trigger('submit')

    let expectedText = "Title is required.";

    let resultElement = wrapper.find('.alert-danger');

    expect(resultElement.exists()).toBeTruthy();
    expect(resultElement.text()).toEqual(expectedText);

    wrapper.destroy();
  })

})
