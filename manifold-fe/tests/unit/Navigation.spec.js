import {  createLocalVue, shallowMount } from '@vue/test-utils';
import Vuetify from 'vuetify';




import Navigation from '@/components/layouts/Navigation.vue'


shallowMount(Navigation, {
    stubs:['router-link', 'router-view']
})



describe('Navigation.vue', () => {
let wrapper;

beforeEach(() => {
    const localVue = createLocalVue()
    const vuetify = new Vuetify();
    localVue.use(vuetify)

    wrapper = shallowMount(Navigation, {
        localVue
    });
})

it('renders a vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
});

it('expects render', () => {
    expect(wrapper.find('[data-testid="card"]').exists()).toBe(true);
})
});
// shallowMount(Navigation, { stubs: ['router-link', 'router-view']})

//     test('should navigated to different pages listed', async () => {
//       const wrapper = mount(Navigation)

//       const tab = wrapper.find('v-tab')

//       await tab.trigger('click')

//       expect(tab.contains('meteorites'))
//     })
