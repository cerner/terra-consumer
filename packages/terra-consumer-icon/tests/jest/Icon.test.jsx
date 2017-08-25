import React from 'react';

// IconChatBubble by default, isBidi: false, isSpin: false
// IconColorIncentives by default, isBidi: false, isSpin: false
// IconOutlineChevronRight by default, isBidi: true, isSpin: false
import IconChatBubble from '../../src/icon/IconChatBubble';
import IconColorIncentives from '../../src/icon/IconColorIncentives';
import IconOutlineChevronRight from '../../src/icon/IconOutlineChevronRight';

describe('Icon', () => {
  describe('IconChatBubble', () => {
    it('should shallow IconBase', () => {
      const wrapper = shallow(<IconChatBubble />);
      expect(wrapper).toMatchSnapshot();
    });

    describe('height prop', () => {
      it('should have default height="1em"', () => {
        const wrapper = shallow(<IconChatBubble />);
        expect(wrapper.prop('height')).toEqual('1em');
      });
      it('should have height=50', () => {
        const wrapper = shallow(<IconChatBubble height="50" />);
        expect(wrapper.prop('height')).toEqual('50');
      });
      it('should have height="4em"', () => {
        const wrapper = shallow(<IconChatBubble height="4em" />);
        expect(wrapper.prop('height')).toEqual('4em');
      });
    });

    describe('width prop', () => {
      it('should have default width="1em"', () => {
        const wrapper = shallow(<IconChatBubble />);
        expect(wrapper.prop('width')).toEqual('1em');
      });
      it('should have width=50', () => {
        const wrapper = shallow(<IconChatBubble width="50" />);
        expect(wrapper.prop('width')).toEqual('50');
      });
      it('should have width="4em"', () => {
        const wrapper = shallow(<IconChatBubble width="4em" />);
        expect(wrapper.prop('width')).toEqual('4em');
      });
    });

    describe('focusable prop', () => {
      it('should have default focusable={false}', () => {
        const wrapper = shallow(<IconChatBubble />);
        expect(wrapper.prop('focusable')).toEqual(false);
      });
      it('should have focusable={true}', () => {
        const wrapper = shallow(<IconChatBubble focusable />);
        expect(wrapper.prop('focusable')).toEqual(true);
      });
    });

    describe('isBidi prop', () => {
      it('should have default isBidi={false}', () => {
        const wrapper = shallow(<IconChatBubble />);
        expect(wrapper.prop('isBidi')).toEqual(false);
      });
      it('should have isBidi={true}', () => {
        const wrapper = shallow(<IconChatBubble isBidi />);
        expect(wrapper.prop('isBidi')).toEqual(true);
      });
    });

    describe('isSpin prop', () => {
      it('should have default isSpin={false}', () => {
        const wrapper = shallow(<IconChatBubble />);
        expect(wrapper.prop('isSpin')).toEqual(false);
      });
      it('should have isSpin={true}', () => {
        const wrapper = shallow(<IconChatBubble isSpin />);
        expect(wrapper.prop('isSpin')).toEqual(true);
      });
    });

    describe('ariaLabel prop', () => {
      it('should have default ariaLabel={null}', () => {
        const wrapper = shallow(<IconChatBubble />);
        expect(wrapper.prop('ariaLabel')).toEqual(null);
      });
      it('should have ariaLabel={some value}', () => {
        const wrapper = shallow(<IconChatBubble ariaLabel="some value" />);
        expect(wrapper.prop('ariaLabel')).toEqual('some value');
      });
    });
  });

  describe('IconColorIncentives', () => {
    it('should shallow IconBase', () => {
      const wrapper = shallow(<IconColorIncentives />);
      expect(wrapper).toMatchSnapshot();
    });

    describe('height prop', () => {
      it('should have default height="1em"', () => {
        const wrapper = shallow(<IconColorIncentives />);
        expect(wrapper.prop('height')).toEqual('1em');
      });
      it('should have height=50', () => {
        const wrapper = shallow(<IconColorIncentives height="50" />);
        expect(wrapper.prop('height')).toEqual('50');
      });
      it('should have height="4em"', () => {
        const wrapper = shallow(<IconColorIncentives height="4em" />);
        expect(wrapper.prop('height')).toEqual('4em');
      });
    });

    describe('width prop', () => {
      it('should have default width="1em"', () => {
        const wrapper = shallow(<IconColorIncentives />);
        expect(wrapper.prop('width')).toEqual('1em');
      });
      it('should have width=50', () => {
        const wrapper = shallow(<IconColorIncentives width="50" />);
        expect(wrapper.prop('width')).toEqual('50');
      });
      it('should have width="4em"', () => {
        const wrapper = shallow(<IconColorIncentives width="4em" />);
        expect(wrapper.prop('width')).toEqual('4em');
      });
    });

    describe('focusable prop', () => {
      it('should have default focusable={false}', () => {
        const wrapper = shallow(<IconColorIncentives />);
        expect(wrapper.prop('focusable')).toEqual(false);
      });
      it('should have focusable={true}', () => {
        const wrapper = shallow(<IconColorIncentives focusable />);
        expect(wrapper.prop('focusable')).toEqual(true);
      });
    });

    describe('isBidi prop', () => {
      it('should have default isBidi={false}', () => {
        const wrapper = shallow(<IconColorIncentives />);
        expect(wrapper.prop('isBidi')).toEqual(false);
      });
      it('should have isBidi={true}', () => {
        const wrapper = shallow(<IconColorIncentives isBidi />);
        expect(wrapper.prop('isBidi')).toEqual(true);
      });
    });

    describe('isSpin prop', () => {
      it('should have default isSpin={false}', () => {
        const wrapper = shallow(<IconColorIncentives />);
        expect(wrapper.prop('isSpin')).toEqual(false);
      });
      it('should have isSpin={false} with override', () => {
        const wrapper = shallow(<IconColorIncentives isSpin={false} />);
        expect(wrapper.prop('isSpin')).toEqual(false);
      });
    });

    describe('ariaLabel prop', () => {
      it('should have default ariaLabel={null}', () => {
        const wrapper = shallow(<IconColorIncentives />);
        expect(wrapper.prop('ariaLabel')).toEqual(null);
      });
      it('should have ariaLabel={some value}', () => {
        const wrapper = shallow(<IconColorIncentives ariaLabel="some value" />);
        expect(wrapper.prop('ariaLabel')).toEqual('some value');
      });
    });
  });


  describe('IconOutlineChevronRight', () => {
    it('should shallow IconBase', () => {
      const wrapper = shallow(<IconOutlineChevronRight />);
      expect(wrapper).toMatchSnapshot();
    });
    it('should render IconBase with custom-class', () => {
      const wrapper = render(<IconOutlineChevronRight className="custom-class" />);
      expect(wrapper).toMatchSnapshot();
    });

    describe('height prop', () => {
      it('should have default height="1em"', () => {
        const wrapper = shallow(<IconOutlineChevronRight />);
        expect(wrapper.prop('height')).toEqual('1em');
      });
      it('should have height=50', () => {
        const wrapper = shallow(<IconOutlineChevronRight height="50" />);
        expect(wrapper.prop('height')).toEqual('50');
      });
      it('should have height="4em"', () => {
        const wrapper = shallow(<IconOutlineChevronRight height="4em" />);
        expect(wrapper.prop('height')).toEqual('4em');
      });
    });

    describe('width prop', () => {
      it('should have default width="1em"', () => {
        const wrapper = shallow(<IconOutlineChevronRight />);
        expect(wrapper.prop('width')).toEqual('1em');
      });
      it('should have width=50', () => {
        const wrapper = shallow(<IconOutlineChevronRight width="50" />);
        expect(wrapper.prop('width')).toEqual('50');
      });
      it('should have width="4em"', () => {
        const wrapper = shallow(<IconOutlineChevronRight width="4em" />);
        expect(wrapper.prop('width')).toEqual('4em');
      });
    });

    describe('focusable prop', () => {
      it('should have default focusable={false}', () => {
        const wrapper = shallow(<IconOutlineChevronRight />);
        expect(wrapper.prop('focusable')).toEqual(false);
      });
      it('should have focusable={true}', () => {
        const wrapper = shallow(<IconOutlineChevronRight focusable />);
        expect(wrapper.prop('focusable')).toEqual(true);
      });
    });

    describe('isBidi prop', () => {
      it('should have default isBidi={true}', () => {
        const wrapper = shallow(<IconOutlineChevronRight />);
        expect(wrapper.prop('isBidi')).toEqual(true);
      });
      it('should have isBidi={false} with override', () => {
        const wrapper = shallow(<IconOutlineChevronRight isBidi={false} />);
        expect(wrapper.prop('isBidi')).toEqual(false);
      });
    });

    describe('isSpin prop', () => {
      it('should have default isSpin={false}', () => {
        const wrapper = shallow(<IconOutlineChevronRight />);
        expect(wrapper.prop('isSpin')).toEqual(false);
      });
      it('should have isSpin={true}', () => {
        const wrapper = shallow(<IconOutlineChevronRight isSpin />);
        expect(wrapper.prop('isSpin')).toEqual(true);
      });
    });

    describe('ariaLabel prop', () => {
      it('should have default ariaLabel={null}', () => {
        const wrapper = shallow(<IconOutlineChevronRight />);
        expect(wrapper.prop('ariaLabel')).toEqual(null);
      });
      it('should have ariaLabel={some value}', () => {
        const wrapper = shallow(<IconOutlineChevronRight ariaLabel="some value" />);
        expect(wrapper.prop('ariaLabel')).toEqual('some value');
      });
    });
  });
});
