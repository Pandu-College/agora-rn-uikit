import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  max: {
    flex: 1,
    position : 'relative',
    height: '75%',
    alignSelf: 'center',
    width: '80%',
    marginBottom: 100,
  },
  buttonHolder: {
    height: 100,
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#0093E9',
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
  },
  fullView: {
  
   width : 230,
   height : 130
   
  },
  minView: {
    width: 110,
    height: 90,
    borderRadius : 10,
    borderColor : "#FFFF00",
    borderWidth : 5
  },

  minViewFallback: {
    width: 110,
    justifyContent: 'center',
    height: 90,
    backgroundColor: '#111',
    borderColor : "#FFFF00",
    borderWidth : 5
  },
  
  minContainer: {
    position: 'absolute',
    top: 15,
    left: 0,
    padding: 0,
    margin: 0,
    // height: 135,
  },
  Controls: {
    position: 'absolute',
    bottom: 25,
    left: 0,
    width: '100%',
    height: 70,
    zIndex: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  minOverlay: {
    ...(StyleSheet.absoluteFill as object),
    backgroundColor: 'black',
    opacity: 0.7,
    zIndex: 2,
    height: '100%',
  },
  minCloseBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
    width: 46,
    height: 46,
    borderRadius: 23,
    position: 'absolute',
    right: 5,
    top: 5,
  },
  controlBtn: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0,0,0,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftRemoteBtn: {
    borderTopLeftRadius: 23,
    borderBottomLeftRadius: 23,
    borderRightWidth: 4 * StyleSheet.hairlineWidth,
    borderColor: '#fff',
  },
  rightRemoteBtn: {
    borderTopRightRadius: 23,
    borderBottomRightRadius: 23,
    borderLeftWidth: 4 * StyleSheet.hairlineWidth,
    borderColor: '#fff',
  },
  remoteBtnContainer: {
    width: '100%',
    display: 'flex',
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  localBtn: {
    borderRadius: 23,
    borderWidth: 4 * StyleSheet.hairlineWidth,
    borderColor: '#007aff',
    backgroundColor: '#007aff',
  },
  endCall: {
    borderRadius: 30,
    borderWidth: 4 * StyleSheet.hairlineWidth,
    borderColor: '#ff0000',
    width: 48,
    height: 48,
    backgroundColor: '#ff0000',
  },
  placeholderIcon: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    opacity: 0.5,
  },
});
