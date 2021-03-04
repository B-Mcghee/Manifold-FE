import {  createLocalVue, shallowMount, mount } from '@vue/test-utils';
import Vue from 'vue'
import Vuetify from 'vuetify'
import CompareIcon from '@/components/UI/CompareIcon.vue'





describe('CompareIcon', () => {
  const localVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();

  })
  test('renders item', () =>{
    const wrapper = mount(CompareIcon,{
      localVue,
      vuetify, 
      propsData:{
        favorite:true
      }
    })
    expect(wrapper.html()).toMatchSnapshot();

  })

  test('button is firing and emitting event', () => {
    const wrapper = mount(CompareIcon, {
      localVue,
      vuetify, 
      propsData:{
        favorite:true
      },


    })
    expect(wrapper.find('.v-btn').exists()).toBe(true);

    const event = jest.fn();
    const button = wrapper.find('.v-btn');

    wrapper.vm.$on('compareMeteorite', event)

    expect(event).toHaveBeenCalledTimes(0)
    button.trigger('click')

    expect(event).toHaveBeenCalledTimes(1)
  })



})
