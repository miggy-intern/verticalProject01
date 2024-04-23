import { StyleSheet } from 'react-native';
import { red } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    width: 90,
    backgroundColor: '#27405f',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  content: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  rectangle: {
    width: 200,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 2,
    borderColor: '#1d354d',
    borderRadius: 10,
  },

  buttonContainer: {
    width: '100%',
    backgroundColor: 'lightblue',
    borderRadius: 5,
    marginBottom: 10,
  },
  TopContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 200,
  },
  TopContainerText: {
    color: 'white',
    marginRight: 20,
  },

  diamondContainer: {
    width: 20,  
    height: 20, 
    transform: [{ rotate: '45deg' }], 
    overflow: 'hidden', 
    marginRight: 5, 
    justifyContent: 'center', 
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    marginRight: 14,

  },

  icon: {
    width: '70%',
    height: '70%',
    transform: [{ rotate: '-45deg' }, { scaleX: -1 }], 
  },

  SettingsTopView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 30,
    padding: 5,
    marginTop: 20,
  },
  SettingsTopText: {
    color: 'white',
    width: 80,
    marginLeft: 250,
  },
  TopContainer2: {
    flexDirection: 'row',
    backgroundColor: '#12233d',
    width: 290,
    height: 100,
    
  },
  Badge1: {
    width: 80,
    height: '100%',
    marginRight: 10,
  },
  Badge1Text: {
    color: 'white',
    flex: 1,
    marginTop: 10,
  },
  TopContainer2RowButton: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },

  gradientButton: {
    marginHorizontal: 5,
    overflow: 'hidden', 
  },

  TopButton: {  
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    height: 16
  },

  SettingView: {
    borderRadius: 5,
    backgroundColor: 10,
    marginTop: 10,
    borderRadius: 1,
  },

  SettingViewText: {
    color: 'white',
    paddingHorizontal: 10,
  },

  gradientBackground2: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    width: 290,
  },

  iconContainer: {
    paddingRight: 10,
  },

  DisplayView: {
    flexDirection: 'row',
    marginTop: 10,
    width: 250,
    height: 160,
  },

  childView1: {
    height: 160,
    width: 70,
    marginRight: 10,
    justifyContent: 'center', 
    alignItems: 'center', 
  },

  gradientBackground: {
    flex: 1, 
  },

  nestedView: {
    height: 160,
    width: 70,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  childView2: {
    height: 160,
    width: 70,
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingHorizontal: 15,

  },
  childView3: {
    height: 160,
    width: 70,
    marginLeft: 10, 
    justifyContent: 'center', 
    alignItems: 'center',
  },

  ImageIcon1: {
    borderWidth: 1,
    width: 55,
    height: 55,
  },

  ImageIcon2: {

    borderWidth: 1,
    width: 55,
    height: 55,
  },

  ImageIcon3: {

    borderWidth: 1,
    width: 55,
    height: 55,
  },

  TextV1: {
    color: '#6195ca',
  },

  ImageIconPressed: {
    borderColor: 'yellow',
    borderWidth: 1,
  },

  square:{
    width: 180,
    height: 180,
  },


  ImageInput: {
    flex: 1, 
    width: null, 
    height: null, 
    resizeMode: 'cover', 
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalContent: {
    width: 340,
    height: 400,
    borderRadius: 10,
    paddingHorizontal: 20,
  },

  TitleModal1: {
    color: 'white',
    paddingTop: 16,
  },

  BodyModal1: {
    color: 'white'
  },

  TopModal: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Align items to the start and end of the container
    padding: 10,
  },

  CloseModal1: {
  }

});

export default styles;
