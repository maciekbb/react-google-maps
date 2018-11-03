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

import { MAP, POLYLINE } from "../constants"

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
  "getInstanceFromComponent": "this.state[POLYLINE]"
}`

/**
 * A wrapper around `google.maps.Polyline`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polyline
 */
export class Polyline extends React.PureComponent {
  static propTypes = {
    __jscodeshiftPlaceholder__: null,
  }

  static contextType = MapContext

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polyline
   */
  constructor(props) {
    super(props)

    this.state = {
      [POLYLINE]: null,
    }
  }

  componentDidMount() {
    const polyline = new google.maps.Polyline()
    construct(Polyline.propTypes, updaterMap, this.props, polyline)
    polyline.setMap(this.context[MAP])
    componentDidMount(this, polyline, eventMap)
    this.setState({ [POLYLINE]: polyline })
  }

  componentDidUpdate(prevProps) {
    componentDidUpdate(
      this,
      this.state[POLYLINE],
      eventMap,
      updaterMap,
      prevProps
    )
  }

  componentWillUnmount() {
    componentWillUnmount(this)
    const polyline = this.state[POLYLINE]
    if (polyline) {
      polyline.setMap(null)
    }
  }

  render() {
    return false
  }
}

export default Polyline

const eventMap = {}

const updaterMap = {}
