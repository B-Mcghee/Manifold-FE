import { mount, createLocalVue} from '@vue/test-utils';
import Vuetify from 'vuetify';
import Increment from '@/components/Increment.vue';

describe('Increment.vue', () => {

  let vuetify;
  let wrapper;
  beforeEach(() => {
    // because of vuetify, we should use a localVue instance
    vuetify = new Vuetify();
    const localVue = new createLocalVue();
    localVue.use(vuetify);
    wrapper = mount(Increment, {
      localVue,
      vuetify
    });
  });
  it('should render the card and the button', () => {
    // to make sure we are free from vuetify components in our tests, use data-testid attributes to search for elements
    expect(wrapper.find('[data-testid="increment-card"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="increment-button"]').exists()).toBe(true);
  });
});