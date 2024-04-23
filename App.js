import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import { View, Text, Button, StyleSheet, Image, TouchableHighlight, Modal } from 'react-native';
import styles from './Styles/Styles';
const Badge1 = require("./Images/Badge1.png");
const Icon = require("./Images/Icon.png")
const Border = require("./Images/Border.png")
const Message = require("./Images/Message.png")

const MessageOutput = require("./Images/ChatOutput.png")
const IconOutput = require("./Images/IconOutput.png")
const BorderOutput = require("./Images/BorderOutput.png")



const App = () => {
  const [message, setMessage] = useState('');
  const handleYesButtonClick = () => {
    setMessage('Hello, this is yes button.');
  };
  const handleNoButtonClick = () => {
    setMessage('Hello, this is no button.');
  };

  const [imageInput, setImage] = useState('');
  const handleImageInput1 = () => {
    setImage(MessageOutput)
  }
  const handleImageInput2 = () => {
    setImage(IconOutput)
  }

  const handleImageInput3 = () => {
    setImage(BorderOutput)
  }


  const [isChildView1Pressed1, setIsChildView1Pressed1] = useState(false);
  const [isChildView1Pressed2, setIsChildView1Pressed2] = useState(false);
  const [isChildView1Pressed3, setIsChildView1Pressed3] = useState(false);

  const handleChildView1Press1 = () => {
    console.log('Child View 1 pressed');
    setIsChildView1Pressed1(true);

    if (isChildView1Pressed1 === true) {
      setIsChildView1Pressed2(false);
      setIsChildView1Pressed3(false);
    }
  };

  const handleChildView1Press2 = () => {
    console.log('Child View 2 pressed');
    setIsChildView1Pressed2(true);

    if (isChildView1Pressed2) {
      setIsChildView1Pressed1(false);
      setIsChildView1Pressed3(false);
    }
  };

  const handleChildView1Press3 = () => {
    console.log('Child View 3 pressed');
    setIsChildView1Pressed3(true);

    if (isChildView1Pressed3) {
      setIsChildView1Pressed1(false);
      setIsChildView1Pressed2(false);
    }
  };


  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <LinearGradient
      colors={['#263e60', '#305983', '#1e253f']}
      style={styles.mainContainer}
    >
      <View style={styles.sidebar}>
        <View style={styles.buttonContainer}>
          <Button title="Button 1" onPress={() => console.log('Button 1 pressed')} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Button 2" onPress={() => console.log('Button 2 pressed')} />
        </View>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.TopContainer}>
          <Text style={styles.TopContainerText}>我喜欢垂直</Text>
          <View style={styles.diamondContainer}>
            <Ionicons name="archive-outline" color="white" size={17} style={styles.icon} />
          </View>
          <View style={styles.diamondContainer}>
            <MaterialCommunityIcons name="wrench-outline" color="white" size={17} style={styles.icon} />
          </View>
        </View>

        <View style={styles.SettingsTopView}>
          <Text style={styles.SettingsTopText}>布兰妮斯皮</Text>
        </View>

        <View style={styles.TopContainer2}>
          <View style={{ flexDirection: 'column', marginRight: 10 }}>
            <Image source={Badge1} style={styles.Badge1} />
          </View>
          <View style={{ flexDirection: 'column', flex: 1 }}>
            <Text style={styles.Badge1Text}> 测试10白色蓝色女士我</Text>
            <View style={styles.TopContainer2RowButton}>
              <LinearGradient
                colors={['#4faad6', '#30689b']}
                style={[styles.gradientButton, { width: 55, height: 28 }]}
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 0 }}
              >
                <TouchableHighlight
                  style={styles.TopButton}
                  onPress={handleYesButtonClick}
                  underlayColor="transparent"
                >
                  <Text style={styles.buttonText}>是的</Text>
                </TouchableHighlight>
              </LinearGradient>

              <LinearGradient
                colors={['#4faad6', '#30689b']}
                style={[styles.gradientButton, { width: 55, height: 28 }]}
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 0 }}
              >
                <TouchableHighlight
                  style={styles.TopButton}
                  onPress={handleNoButtonClick}
                  underlayColor="transparent"
                >
                  <Text style={styles.buttonText}>不</Text>
                </TouchableHighlight>
              </LinearGradient>

              <LinearGradient
                colors={['#4faad6', '#30689b']}
                style={[styles.gradientButton, { width: 55, height: 28 }]}
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 0 }}
              >
                <TouchableHighlight
                  style={styles.TopButton}
                  onPress={() => setIsModalVisible(true)}
                  underlayColor="transparent"
                >
                  <Text style={styles.buttonText}>依靠</Text>
                </TouchableHighlight>
              </LinearGradient>
            </View>
          </View>
        </View>


        <View style={styles.SettingView}>
          <LinearGradient
            colors={['#467fb0', '#568ab9', '#1b3c60', '#18304a']}
            start={{ x: -0.1, y: 1 }} // Start from the left
            end={{ x: 1, y: 10 }}
            style={styles.gradientBackground2}
          >
            <Text style={styles.SettingViewText}>苹果1真好</Text>
            <View style={styles.iconContainer}>
              <Ionicons name="settings-outline" color="white" size={20} />
            </View>
          </LinearGradient>
        </View>



        <View style={styles.DisplayView}>
          <TouchableHighlight
            style={styles.childView1}
            onPress={() => {
              handleChildView1Press1();
              handleImageInput1();
            }}
            underlayColor="transparent"
          >
            <LinearGradient
              colors={['#3e87cb', '#1c3c63', '#1c3c63', '#3e87cb']}
              style={[styles.gradientBackground, isChildView1Pressed1 && styles.childViewPressed1]}
            >
              <View style={styles.nestedView}>
                <Image source={Message} style={[styles.ImageIcon1, isChildView1Pressed1 && styles.ImageIconPressed]} />
                <Text style={styles.TextV1}>V1</Text>
              </View>
            </LinearGradient>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.childView2}
            onPress={() => {
              handleChildView1Press2();
              handleImageInput2();
            }}
            underlayColor="transparent"
          >
            <LinearGradient
              colors={['#3e87cb', '#1c3c63', '#1c3c63', '#3e87cb']}
              style={[styles.gradientBackground, isChildView1Pressed2 && styles.childViewPressed2]}
            >
              <View style={styles.nestedView}>
                <Image source={Icon} style={[styles.ImageIcon2, isChildView1Pressed2 && styles.ImageIconPressed]} />
                <Text style={styles.TextV1}>V1</Text>
              </View>
            </LinearGradient>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.childView3}
            onPress={() => {
              handleChildView1Press3();
              handleImageInput3();
            }}
            underlayColor="transparent"
          >
            <LinearGradient
              colors={['#3e87cb', '#1c3c63', '#1c3c63', '#3e87cb']}
              style={[styles.gradientBackground, isChildView1Pressed3 && styles.childViewPressed3]}
            >
              <View style={styles.nestedView}>
                <Image source={Border} style={[styles.ImageIcon3, isChildView1Pressed3 && styles.ImageIconPressed]} />
                <Text style={styles.TextV1}>V1</Text>
              </View>
            </LinearGradient>
          </TouchableHighlight>
        </View>


        <View style={styles.content}>
          <LinearGradient
            colors={['#263e60', '#305983', '#1e253f']}
            style={styles.rectangle}>
            <View style={styles.square}>
              <Image source={imageInput} style={styles.ImageInput} />
            </View>
          </LinearGradient>
        </View>

      </View>

      <Modal visible={isModalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <LinearGradient
            colors={['#263e60', '#305983', '#1e253f']}
            style={styles.modal1}
          >
            <View style = {styles.TopModal}>
            <Text style={styles.TitleModal1}>如何变得有趣</Text>
            <TouchableHighlight
            onPress={() => setIsModalVisible(false)}
            underlayColor="transparent"
          >
            <Ionicons name="close-circle-outline" color="white" size={50} style={styles.CloseModal1} />
            </TouchableHighlight>
            

            </View>
            <View style={styles.modalContent}>
              <Text styles={styles.BodyModal1}>1. 了解一些让你发笑的事情。笑本身是无意识的。虽然我们可以控制自己不笑（并不总是成功），
                但我们很难按需产生笑声，而且这样做通常看起来是“被迫的”。幸运的是，笑声很有感染力  </Text>
              <Text styles={styles.BodyModal1}>2. 学会在无聊或无趣的情况下笑。很高兴知道，一个地方越不那么有趣，
                就越容易添加幽默惊喜的元素。在办公室里让人们开怀大笑可能比在喜剧俱乐部里让人们开怀大笑更容易 ;</Text>
              <Text styles={styles.BodyModal1}>3. 学会欣赏诙谐的双关语和双关语 </Text>
            </View>
          </LinearGradient>

        </View>
      </Modal>

    </LinearGradient>

  );
};

export default App;
