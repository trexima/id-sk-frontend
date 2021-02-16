import "../../../govuk/vendor/polyfills/Function/prototype/bind";
import "../../../govuk/vendor/polyfills/Event"; // addEventListener and event.target normaliziation
import { nodeListForEach, toggleClass } from "../../common";

/**
 * Crossroad Component
 */
function Crossroad($module) {
  this.$module = $module;
  this.$items = $module.querySelectorAll(".idsk-crossroad-title");
  // console.log(this.$module.querySelectorAll(".idsk-crossroad__item"));
}

Crossroad.prototype.init = function () {
  var $module = this.$module;
  var $items = this.$items;

  if (!$module || !$items) {
    return;
  }

  var $uncollapseButton = $module.querySelector('#idsk-crossroad__uncollapse-button');
  var $collapseButton = $module.querySelector('#idsk-crossroad__collapse-button');

  if ($uncollapseButton) {
    $uncollapseButton.addEventListener('click', this.handleShowItems.bind(this));
  }

  if ($collapseButton) {
    $collapseButton.addEventListener('click', this.handleHideItems.bind(this));
  }

  nodeListForEach(
    $items,
    function ($item) {
      $item.addEventListener("click", this.handleItemClick.bind(this));
    }.bind(this)
  );

};

Crossroad.prototype.handleItemClick = function (e) {
  var $item = e.target;
  $item.setAttribute("aria-current", "true");
  console.log("dds");
};

Crossroad.prototype.handleShowItems = function (e) {
  var $crossroadItems = this.$module.querySelectorAll('#idsk-crossroad__item');
  var $collapseButton = this.$module.querySelector('#idsk-crossroad__collapse-button');

  $crossroadItems.forEach(crossroadItem => {
    if (crossroadItem.classList.contains('idsk-crossroad__item--two-columns-hide-mobile')) {
      crossroadItem.classList.add('idsk-crossroad__item--two-columns-show-mobile');
      crossroadItem.classList.remove('idsk-crossroad__item--two-columns-hide-mobile');
    }
    if (crossroadItem.classList.contains('idsk-crossroad__item--two-columns-hide')) {
      crossroadItem.classList.add('idsk-crossroad__item--two-columns-show');
      crossroadItem.classList.remove('idsk-crossroad__item--two-columns-hide');
    }
    if (crossroadItem.classList.contains('idsk-crossroad__item--one-column-hide')) {
      crossroadItem.classList.add('idsk-crossroad__item--one-column-show');
      crossroadItem.classList.remove('idsk-crossroad__item--one-column-hide');
    }
  });
  toggleClass($collapseButton, 'idsk-crossroad__item--one-column-hide');
  toggleClass(e.srcElement, 'idsk-crossroad__item--one-column-hide');
};

Crossroad.prototype.handleHideItems = function (e) {
  var $crossroadItems = this.$module.querySelectorAll('#idsk-crossroad__item');
  var $collapseButton = this.$module.querySelector('#idsk-crossroad__uncollapse-button');

  $crossroadItems.forEach(crossroadItem => {
    if (crossroadItem.classList.contains('idsk-crossroad__item--two-columns-show-mobile')) {
      crossroadItem.classList.remove('idsk-crossroad__item--two-columns-show-mobile');
      crossroadItem.classList.add('idsk-crossroad__item--two-columns-hide-mobile');
    }
    if (crossroadItem.classList.contains('idsk-crossroad__item--two-columns-show')) {
      crossroadItem.classList.remove('idsk-crossroad__item--two-columns-show');
      crossroadItem.classList.add('idsk-crossroad__item--two-columns-hide');
    }
    if (crossroadItem.classList.contains('idsk-crossroad__item--one-column-show')) {
      crossroadItem.classList.remove('idsk-crossroad__item--one-column-show');
      crossroadItem.classList.add('idsk-crossroad__item--one-column-hide');
    }
  });
  toggleClass($collapseButton, 'idsk-crossroad__item--one-column-hide');
  toggleClass(e.srcElement, 'idsk-crossroad__item--one-column-hide');
};

export default Crossroad;
