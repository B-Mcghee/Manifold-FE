import { createLocalVue, mount } from "@vue/test-utils";
import Vuetify from "vuetify";
import FavoriteIcon from "@/components/UI/FavoriteIcon.vue";

describe("FavoriteIcon", () => {
  const localVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });
  test("renders item", () => {
    const wrapper = mount(FavoriteIcon, {
      localVue,
      vuetify,
      propsData: {
        favorite: true
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("button is firing and emitting event", () => {
    const wrapper = mount(FavoriteIcon, {
      localVue,
      vuetify,
      propsData: {
        favorite: true
      }
    });
    expect(wrapper.find(".v-btn").exists()).toBe(true);

    const event = jest.fn();
    const button = wrapper.find(".v-btn");

    wrapper.vm.$on("toggleFavorite", event);

    expect(event).toHaveBeenCalledTimes(0);
    button.trigger("click");

    expect(event).toHaveBeenCalledTimes(1);
  });
});
