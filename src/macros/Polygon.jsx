/* global google */
import React from "react"
import PropTypes from "prop-types"

import {
  construct,
  componentDidMount,
  componentDidUpdate,
  componentWillUnmount,
} from "../utils/MapChildHelper"
import MapContext from "../utils/MapContext"

import { MAP, POLYGON } from "../constants"

export const __jscodeshiftPlaceholder__ = `{
  "eventMapOverrides": {
    "onDblClick": "dblclick",
    "onDragEnd": "dragend",
    "onDragStart": "dragstart",
    "onMouseDown": "mousedown",
    "onMouseMove": "mousemove",
    "onMouseOut": "mouseout",
    "onMouseOver": "mouseover",
    "onMouseUp": "mouseup",
    "onRightClick": "rightclick"
  },
  "getInstanceFromComponent": "this.state[POLYGON]"
}`

/**
 * A wrapper around `google.maps.Polygon`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polygon
 */
export class Polygon extends React.PureComponent {
  static propTypes = {
    __jscodeshiftPlaceholder__: null,
  }

  static contextType = MapContext

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polygon
   */
  constructor(props) {
    super(props)

    this.state = {
      [POLYGON]: null,
    }
  }

  componentDidMount() {
    const polygon = new google.maps.Polygon()
    construct(Polygon.propTypes, updaterMap, this.props, polygon)
    polygon.setMap(this.context[MAP])
    componentDidMount(this, polygon, eventMap)
    this.setState({ [POLYGON]: polygon })
  }

  componentDidUpdate(prevProps) {
    componentDidUpdate(
      this,
      this.state[POLYGON],
      eventMap,
      updaterMap,
      prevProps
    )
  }

  componentWillUnmount() {
    componentWillUnmount(this)
    const polygon = this.state[POLYGON]
    if (polygon) {
      polygon.setMap(null)
    }
  }

  render() {
    return false
  }
}

export default Polygon

const eventMap = {}

const updaterMap = {}
