import Header from '@/components/layout/Header.vue'
import { mount, createLocalVue } from "@vue/test-utils"
import Router from "@/router.js"

const localVue = createLocalVue()
localVue.use(Router)

describe('Header.vue', () => {
  it("renders all navigation buttons", () => {
    const router = Router;
    const wrapper = mount(Header, { localVue, router })

    let navButtons = wrapper.findAll(".btn");
    expect(navButtons.length).toBe(2);
  })
})
