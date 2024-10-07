import React, { useEffect, useLayoutEffect, forwardRef, useState, useRef, useImperativeHandle } from 'react';
import ReactDOM from 'react-dom';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var useOnEscape = function useOnEscape(handler, active) {
  if (active === void 0) {
    active = true;
  }

  useEffect(function () {
    if (!active) return;

    var listener = function listener(event) {
      // check if key is an Escape
      if (event.key === 'Escape') handler(event);
    };

    document.addEventListener('keyup', listener);
    return function () {
      if (!active) return;
      document.removeEventListener('keyup', listener);
    };
  }, [handler, active]);
};
var useRepositionOnResize = function useRepositionOnResize(handler, active) {
  if (active === void 0) {
    active = true;
  }

  useEffect(function () {
    if (!active) return;

    var listener = function listener() {
      handler();
    };

    window.addEventListener('resize', listener);
    return function () {
      if (!active) return;
      window.removeEventListener('resize', listener);
    };
  }, [handler, active]);
};
var useOnClickOutside = function useOnClickOutside(ref, handler, active) {
  if (active === void 0) {
    active = true;
  }

  useEffect(function () {
    if (!active) return;

    var listener = function listener(event) {
      // Do nothing if clicking ref's element or descendent elements
      var refs = Array.isArray(ref) ? ref : [ref];
      var contains = false;
      refs.forEach(function (r) {
        if (!r.current || r.current.contains(event.target)) {
          contains = true;
          return;
        }
      });
      event.stopPropagation();
      if (!contains) handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return function () {
      if (!active) return;
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler, active]);
}; // Make sure that user is not able TAB out of the Modal content on Open

var useTabbing = function useTabbing(contentRef, active) {
  if (active === void 0) {
    active = true;
  }

  useEffect(function () {
    if (!active) return;

    var listener = function listener(event) {
      // check if key is an Tab
      if (event.keyCode === 9) {
        var _contentRef$current;

        var els = contentRef === null || contentRef === void 0 ? void 0 : (_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 ? void 0 : _contentRef$current.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]');
        var focusableEls = Array.prototype.slice.call(els);

        if (focusableEls.length === 1) {
          event.preventDefault();
          return;
        }

        var firstFocusableEl = focusableEls[0];
        var lastFocusableEl = focusableEls[focusableEls.length - 1];

        if (event.shiftKey && document.activeElement === firstFocusableEl) {
          event.preventDefault();
          lastFocusableEl.focus();
        } else if (document.activeElement === lastFocusableEl) {
          event.preventDefault();
          firstFocusableEl.focus();
        }
      }
    };

    document.addEventListener('keydown', listener);
    return function () {
      if (!active) return;
      document.removeEventListener('keydown', listener);
    };
  }, [contentRef, active]);
};
var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

var Style = {
  popupContent: {
    tooltip: {
      position: 'absolute',
      zIndex: 999
    },
    modal: {
      position: 'relative',
      margin: 'auto'
    }
  },
  popupArrow: {
    height: '8px',
    width: '16px',
    position: 'absolute',
    background: 'transparent',
    color: '#FFF',
    zIndex: -1
  },
  overlay: {
    tooltip: {
      position: 'fixed',
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
      zIndex: 999
    },
    modal: {
      position: 'fixed',
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
      display: 'flex',
      zIndex: 999
    }
  }
};

var POSITION_TYPES = ['top left', 'top center', 'top right', 'right top', 'right center', 'right bottom', 'bottom left', 'bottom center', 'bottom right', 'left top', 'left center', 'left bottom'];

var getCoordinatesForPosition = function getCoordinatesForPosition(triggerBounding, ContentBounding, position, //PopupPosition | PopupPosition[],
arrow, _ref) {
  var offsetX = _ref.offsetX,
      offsetY = _ref.offsetY;
  var margin = arrow ? 8 : 0;
  var args = position.split(' '); // the step N 1 : center the popup content => ok

  var CenterTop = triggerBounding.top + triggerBounding.height / 2;
  var CenterLeft = triggerBounding.left + triggerBounding.width / 2;
  var height = ContentBounding.height,
      width = ContentBounding.width;
  var top = CenterTop - height / 2;
  var left = CenterLeft - width / 2;
  var transform = '';
  var arrowTop = '0%';
  var arrowLeft = '0%'; // the  step N 2 : => ok

  switch (args[0]) {
    case 'top':
      top -= height / 2 + triggerBounding.height / 2 + margin;
      transform = "rotate(180deg)  translateX(50%)";
      arrowTop = '100%';
      arrowLeft = '50%';
      break;

    case 'bottom':
      top += height / 2 + triggerBounding.height / 2 + margin;
      transform = "rotate(0deg) translateY(-100%) translateX(-50%)";
      arrowLeft = '50%';
      break;

    case 'left':
      left -= width / 2 + triggerBounding.width / 2 + margin;
      transform = " rotate(90deg)  translateY(50%) translateX(-25%)";
      arrowLeft = '100%';
      arrowTop = '50%';
      break;

    case 'right':
      left += width / 2 + triggerBounding.width / 2 + margin;
      transform = "rotate(-90deg)  translateY(-150%) translateX(25%)";
      arrowTop = '50%';
      break;
  }

  switch (args[1]) {
    case 'top':
      top = triggerBounding.top;
      arrowTop = triggerBounding.height / 2 + "px";
      break;

    case 'bottom':
      top = triggerBounding.top - height + triggerBounding.height;
      arrowTop = height - triggerBounding.height / 2 + "px";
      break;

    case 'left':
      left = triggerBounding.left;
      arrowLeft = triggerBounding.width / 2 + "px";
      break;

    case 'right':
      left = triggerBounding.left - width + triggerBounding.width;
      arrowLeft = width - triggerBounding.width / 2 + "px";
      break;
  }

  top = args[0] === 'top' ? top - offsetY : top + offsetY;
  left = args[0] === 'left' ? left - offsetX : left + offsetX;
  return {
    top: top,
    left: left,
    transform: transform,
    arrowLeft: arrowLeft,
    arrowTop: arrowTop
  };
};

var getTooltipBoundary = function getTooltipBoundary(keepTooltipInside) {
  // add viewport
  var boundingBox = {
    top: 0,
    left: 0,

    /* eslint-disable-next-line no-undef */
    width: window.innerWidth,

    /* eslint-disable-next-line no-undef */
    height: window.innerHeight
  };

  if (typeof keepTooltipInside === 'string') {
    /* eslint-disable-next-line no-undef */
    var selector = document.querySelector(keepTooltipInside);

    if (process.env.NODE_ENV !== 'production') {
      if (selector === null) throw new Error(keepTooltipInside + " selector does not exist : keepTooltipInside must be a valid html selector 'class' or 'Id'  or a boolean value");
    }

    if (selector !== null) boundingBox = selector.getBoundingClientRect();
  }

  return boundingBox;
};

var calculatePosition = function calculatePosition(triggerBounding, ContentBounding, position, arrow, _ref2, keepTooltipInside) {
  var offsetX = _ref2.offsetX,
      offsetY = _ref2.offsetY;
  var bestCoords = {
    arrowLeft: '0%',
    arrowTop: '0%',
    left: 0,
    top: 0,
    transform: 'rotate(135deg)'
  };
  var i = 0;
  var wrapperBox = getTooltipBoundary(keepTooltipInside);
  var positions = Array.isArray(position) ? position : [position]; // keepTooltipInside would be activated if the  keepTooltipInside exist or the position is Array

  if (keepTooltipInside || Array.isArray(position)) positions = [].concat(positions, POSITION_TYPES); // add viewPort for WarpperBox
  // wrapperBox.top = wrapperBox.top + window.scrollY;
  // wrapperBox.left = wrapperBox.left + window.scrollX;

  while (i < positions.length) {
    bestCoords = getCoordinatesForPosition(triggerBounding, ContentBounding, positions[i], arrow, {
      offsetX: offsetX,
      offsetY: offsetY
    });
    var contentBox = {
      top: bestCoords.top,
      left: bestCoords.left,
      width: ContentBounding.width,
      height: ContentBounding.height
    };

    if (contentBox.top <= wrapperBox.top || contentBox.left <= wrapperBox.left || contentBox.top + contentBox.height >= wrapperBox.top + wrapperBox.height || contentBox.left + contentBox.width >= wrapperBox.left + wrapperBox.width) {
      i++;
    } else {
      break;
    }
  }

  return bestCoords;
};

var popupIdCounter = 0;

var getRootPopup = function getRootPopup() {
  var PopupRoot = document.getElementById('popup-root');

  if (PopupRoot === null) {
    PopupRoot = document.createElement('div');
    PopupRoot.setAttribute('id', 'popup-root');
    document.body.appendChild(PopupRoot);
  }

  return PopupRoot;
};

var Popup = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var _ref$trigger = _ref.trigger,
      trigger = _ref$trigger === void 0 ? null : _ref$trigger,
      _ref$onOpen = _ref.onOpen,
      onOpen = _ref$onOpen === void 0 ? function () {} : _ref$onOpen,
      _ref$onClose = _ref.onClose,
      onClose = _ref$onClose === void 0 ? function () {} : _ref$onClose,
      _ref$defaultOpen = _ref.defaultOpen,
      defaultOpen = _ref$defaultOpen === void 0 ? false : _ref$defaultOpen,
      _ref$open = _ref.open,
      open = _ref$open === void 0 ? undefined : _ref$open,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$nested = _ref.nested,
      nested = _ref$nested === void 0 ? false : _ref$nested,
      _ref$closeOnDocumentC = _ref.closeOnDocumentClick,
      closeOnDocumentClick = _ref$closeOnDocumentC === void 0 ? true : _ref$closeOnDocumentC,
      _ref$repositionOnResi = _ref.repositionOnResize,
      repositionOnResize = _ref$repositionOnResi === void 0 ? true : _ref$repositionOnResi,
      _ref$closeOnEscape = _ref.closeOnEscape,
      closeOnEscape = _ref$closeOnEscape === void 0 ? true : _ref$closeOnEscape,
      _ref$on = _ref.on,
      on = _ref$on === void 0 ? ['click'] : _ref$on,
      _ref$contentStyle = _ref.contentStyle,
      contentStyle = _ref$contentStyle === void 0 ? {} : _ref$contentStyle,
      _ref$arrowStyle = _ref.arrowStyle,
      arrowStyle = _ref$arrowStyle === void 0 ? {} : _ref$arrowStyle,
      _ref$overlayStyle = _ref.overlayStyle,
      overlayStyle = _ref$overlayStyle === void 0 ? {} : _ref$overlayStyle,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? 'bottom center' : _ref$position,
      _ref$modal = _ref.modal,
      modal = _ref$modal === void 0 ? false : _ref$modal,
      _ref$lockScroll = _ref.lockScroll,
      lockScroll = _ref$lockScroll === void 0 ? false : _ref$lockScroll,
      _ref$arrow = _ref.arrow,
      arrow = _ref$arrow === void 0 ? true : _ref$arrow,
      _ref$offsetX = _ref.offsetX,
      offsetX = _ref$offsetX === void 0 ? 0 : _ref$offsetX,
      _ref$offsetY = _ref.offsetY,
      offsetY = _ref$offsetY === void 0 ? 0 : _ref$offsetY,
      _ref$mouseEnterDelay = _ref.mouseEnterDelay,
      mouseEnterDelay = _ref$mouseEnterDelay === void 0 ? 100 : _ref$mouseEnterDelay,
      _ref$mouseLeaveDelay = _ref.mouseLeaveDelay,
      mouseLeaveDelay = _ref$mouseLeaveDelay === void 0 ? 100 : _ref$mouseLeaveDelay,
      _ref$keepTooltipInsid = _ref.keepTooltipInside,
      keepTooltipInside = _ref$keepTooltipInsid === void 0 ? false : _ref$keepTooltipInsid,
      children = _ref.children;

  var _useState = useState(open || defaultOpen),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var triggerRef = useRef(null);
  var contentRef = useRef(null);
  var arrowRef = useRef(null);
  var focusedElBeforeOpen = useRef(null);
  var popupId = useRef("popup-" + ++popupIdCounter);
  var isModal = modal ? true : !trigger;
  var timeOut = useRef(0);
  useIsomorphicLayoutEffect(function () {
    if (isOpen) {
      focusedElBeforeOpen.current = document.activeElement;
      setPosition();
      focusContentOnOpen(); // for accessibility

      lockScrolll();
    } else {
      resetScroll();
    }

    return function () {
      clearTimeout(timeOut.current);
    };
  }, [isOpen]); // for uncontrolled popup we need to sync isOpen with open prop

  useEffect(function () {
    if (typeof open === 'boolean') {
      if (open) openPopup();else closePopup();
    }
  }, [open, disabled]);

  var openPopup = function openPopup(event) {
    if (isOpen || disabled) return;
    setIsOpen(true);
    setTimeout(function () {
      return onOpen(event);
    }, 0);
  };

  var closePopup = function closePopup(event) {
    var _focusedElBeforeOpen$;

    if (!isOpen || disabled) return;
    setIsOpen(false);
    if (isModal) (_focusedElBeforeOpen$ = focusedElBeforeOpen.current) === null || _focusedElBeforeOpen$ === void 0 ? void 0 : _focusedElBeforeOpen$.focus();
    setTimeout(function () {
      return onClose(event);
    }, 0);
  };

  var togglePopup = function togglePopup(event) {
    event === null || event === void 0 ? void 0 : event.stopPropagation();
    if (!isOpen) openPopup(event);else closePopup(event);
  };

  var onMouseEnter = function onMouseEnter(event) {
    clearTimeout(timeOut.current);
    timeOut.current = setTimeout(function () {
      return openPopup(event);
    }, mouseEnterDelay);
  };

  var onContextMenu = function onContextMenu(event) {
    event === null || event === void 0 ? void 0 : event.preventDefault();
    togglePopup();
  };

  var onMouseLeave = function onMouseLeave(event) {
    clearTimeout(timeOut.current);
    timeOut.current = setTimeout(function () {
      return closePopup(event);
    }, mouseLeaveDelay);
  };

  var lockScrolll = function lockScrolll() {
    if (isModal && lockScroll) document.getElementsByTagName('body')[0].style.overflow = 'hidden'; // migrate to document.body
  };

  var resetScroll = function resetScroll() {
    if (isModal && lockScroll) document.getElementsByTagName('body')[0].style.overflow = 'auto';
  };

  var focusContentOnOpen = function focusContentOnOpen() {
    var _contentRef$current;

    var focusableEls = contentRef === null || contentRef === void 0 ? void 0 : (_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 ? void 0 : _contentRef$current.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]');
    var firstEl = Array.prototype.slice.call(focusableEls)[0];
    firstEl === null || firstEl === void 0 ? void 0 : firstEl.focus();
  };

  useImperativeHandle(ref, function () {
    return {
      open: function open() {
        openPopup();
      },
      close: function close() {
        closePopup();
      },
      toggle: function toggle() {
        togglePopup();
      }
    };
  }); // set Position

  var setPosition = function setPosition() {
    if (isModal || !isOpen) return;
    if (!(triggerRef === null || triggerRef === void 0 ? void 0 : triggerRef.current) || !(triggerRef === null || triggerRef === void 0 ? void 0 : triggerRef.current) || !(contentRef === null || contentRef === void 0 ? void 0 : contentRef.current)) return; /// show error as one of ref is undefined

    var trigger = triggerRef.current.getBoundingClientRect();
    var content = contentRef.current.getBoundingClientRect();
    var cords = calculatePosition(trigger, content, position, arrow, {
      offsetX: offsetX,
      offsetY: offsetY
    }, keepTooltipInside);
    contentRef.current.style.top = cords.top + window.scrollY + "px";
    contentRef.current.style.left = cords.left + window.scrollX + "px";

    if (arrow && !!arrowRef.current) {
      var _arrowStyle$top, _arrowStyle$left;

      arrowRef.current.style.transform = cords.transform;
      arrowRef.current.style.setProperty('-ms-transform', cords.transform);
      arrowRef.current.style.setProperty('-webkit-transform', cords.transform);
      arrowRef.current.style.top = ((_arrowStyle$top = arrowStyle.top) === null || _arrowStyle$top === void 0 ? void 0 : _arrowStyle$top.toString()) || cords.arrowTop;
      arrowRef.current.style.left = ((_arrowStyle$left = arrowStyle.left) === null || _arrowStyle$left === void 0 ? void 0 : _arrowStyle$left.toString()) || cords.arrowLeft;
    }
  }; // hooks


  useOnEscape(closePopup, closeOnEscape); // can be optimized if we disabled for hover

  useTabbing(contentRef, isOpen && isModal);
  useRepositionOnResize(setPosition, repositionOnResize);
  useOnClickOutside(!!trigger ? [contentRef, triggerRef] : [contentRef], closePopup, closeOnDocumentClick && !nested); // we need to add a ne
  // render the trigger element and add events

  var renderTrigger = function renderTrigger() {
    var triggerProps = {
      key: 'T',
      ref: triggerRef,
      'aria-describedby': popupId.current
    };
    var onAsArray = Array.isArray(on) ? on : [on];

    for (var i = 0, len = onAsArray.length; i < len; i++) {
      switch (onAsArray[i]) {
        case 'click':
          triggerProps.onClick = togglePopup;
          break;

        case 'right-click':
          triggerProps.onContextMenu = onContextMenu;
          break;

        case 'hover':
          triggerProps.onMouseEnter = onMouseEnter;
          triggerProps.onMouseLeave = onMouseLeave;
          break;

        case 'focus':
          triggerProps.onFocus = onMouseEnter;
          triggerProps.onBlur = onMouseLeave;
          break;
      }
    }

    if (typeof trigger === 'function') {
      var comp = trigger(isOpen);
      return !!trigger && React.cloneElement(comp, triggerProps);
    }

    return !!trigger && React.cloneElement(trigger, triggerProps);
  };

  var addWarperAction = function addWarperAction() {
    var popupContentStyle = isModal ? Style.popupContent.modal : Style.popupContent.tooltip;
    var childrenElementProps = {
      className: "popup-content " + (className !== '' ? className.split(' ').map(function (c) {
        return c + "-content";
      }).join(' ') : ''),
      style: _extends({}, popupContentStyle, contentStyle, {
        pointerEvents: 'auto'
      }),
      ref: contentRef,
      onClick: function onClick(e) {
        e.stopPropagation();
      }
    };

    if (!modal && on.indexOf('hover') >= 0) {
      childrenElementProps.onMouseEnter = onMouseEnter;
      childrenElementProps.onMouseLeave = onMouseLeave;
    }

    return childrenElementProps;
  };

  var renderContent = function renderContent() {
    return React.createElement("div", Object.assign({}, addWarperAction(), {
      key: "C",
      role: isModal ? 'dialog' : 'tooltip',
      id: popupId.current
    }), arrow && !isModal && React.createElement("div", {
      ref: arrowRef,
      style: Style.popupArrow
    }, React.createElement("svg", {
      "data-testid": "arrow",
      className: "popup-arrow " + (className !== '' ? className.split(' ').map(function (c) {
        return c + "-arrow";
      }).join(' ') : ''),
      viewBox: "0 0 32 16",
      style: _extends({
        position: 'absolute'
      }, arrowStyle)
    }, React.createElement("path", {
      d: "M16 0l16 16H0z",
      fill: "currentcolor"
    }))), children && typeof children === 'function' ? children(closePopup, isOpen) : children);
  };

  var overlay = !(on.indexOf('hover') >= 0);
  var ovStyle = isModal ? Style.overlay.modal : Style.overlay.tooltip;
  var content = [overlay && React.createElement("div", {
    key: "O",
    "data-testid": "overlay",
    "data-popup": isModal ? 'modal' : 'tooltip',
    className: "popup-overlay " + (className !== '' ? className.split(' ').map(function (c) {
      return c + "-overlay";
    }).join(' ') : ''),
    style: _extends({}, ovStyle, overlayStyle, {
      pointerEvents: closeOnDocumentClick && nested || isModal ? 'auto' : 'none'
    }),
    onClick: closeOnDocumentClick && nested ? closePopup : undefined,
    tabIndex: -1
  }, isModal && renderContent()), !isModal && renderContent()];
  return React.createElement(React.Fragment, null, renderTrigger(), isOpen && ReactDOM.createPortal(content, getRootPopup()));
});

export default Popup;
export { Popup };
//# sourceMappingURL=reactjs-popup.esm.js.map
