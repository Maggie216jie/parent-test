import React from 'react'
import { mount } from 'enzyme'
import {Parent} from'./Parent'

const initData = {
    items: ["blue", "red", "Orange","yellow", "green"],
    userName:"Mengjie"
  }
const props={
    data:{
        state:initData
    }
    
}

describe('test component init behavior', () => {
    it('test Create page for the first render, getEditData should be called with the right params', () => {
      const wrapper = mount(<Parent {...props}  />)

      //如果没有22行就没事儿

      wrapper.find('input').simulate('change',{target:{value:"r"}})

    })
})