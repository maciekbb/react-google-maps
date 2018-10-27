import invariant from "invariant"
import React from "react"
import PropTypes from "prop-types"

import {
  construct,
  componentDidMount,
  componentDidUpdate,
  componentWillUnmount,
} from "../utils/MapChildHelper"

import { MAP } from "../constants"
import MapContext from "../utils/MapContext"

export const __jscodeshiftPlaceholder__ = `{
  "eventMapOverrides": {
    "onDblClick": "dblclick",
    "onDragEnd": "dragend",
    "onDragStart": "dragstart",
    "onMapTypeIdChanged": "maptypeid_changed",
    "onMouseMove": "mousemove",
    "onMouseOut": "mouseout",
    "onMouseOver": "mouseover",
    "onRightClick": "rightclick",
    "onTilesLoaded": "tilesloaded"
  },
  "getInstanceFromComponent": "this.context[MAP]"
}`

/**
 * A wrapper around `google.maps.Map`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
 */
export default class Map extends React.PureComponent {
  static displayName = "GoogleMap"

  static propTypes = {
    __jscodeshiftPlaceholder__: null,

    /**
     * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapTypeRegistry
     * @type Array<[id:string, mapType:MapType|*]>
     */
    defaultExtraMapTypes: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.any)),
  }

  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
   * @public
   */
  fitBounds(...args) {
    return this.context[MAP].fitBounds(...args)
  }

  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
   * @public
   */
  panBy(...args) {
    return this.context[MAP].panBy(...args)
  }

  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
   * @public
   */
  panTo(...args) {
    return this.context[MAP].panTo(...args)
  }

  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
   * @public
   */
  panToBounds(...args) {
    return this.context[MAP].panToBounds(...args)
  }

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
   */
  constructor(props) {
    super(props)

    // invariant(
    //   !!this.context[MAP],
    //   `Did you wrap <GoogleMap> component with withGoogleMap() HOC?`
    // )
  }

  componentDidMount() {
    construct(GoogleMap.propTypes, updaterMap, this.props, this.context[MAP])
    componentDidMount(this, this.context[MAP], eventMap)
  }

  componentDidUpdate(prevProps) {
    componentDidUpdate(this, this.context[MAP], eventMap, updaterMap, prevProps)
  }

  componentWillUnmount() {
    componentWillUnmount(this)
  }

  render() {
    const { children } = this.props
    return <div>{children}</div>
  }
}

Map.contextType = MapContext

export const GoogleMap = Map

const eventMap = {}

const updaterMap = {
  extraMapTypes(instance, extra) {
    console.log(instance, extra)
    extra.forEach(it => {
      console.log(it)
      instance.mapTypes.set(...it)
    })
  },
}
