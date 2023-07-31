<h1 align="center"> react-native-bm-icon-button :iphone:</h1>

<p align="center">
<img src="https://img.shields.io/badge/platform-android-green.svg" />
<img src="https://img.shields.io/badge/platform-iOS-blue.svg" />
<img src="https://img.shields.io/badge/language-Javascript-orange.svg" />
<img src="https://img.shields.io/badge/License-MIT-blue" />
</p>

## Preview
![Preview](https://metautbenjamin.com:3000/file/image/rn_mb_buttonTitle.png)


React native module to add a button icon (with text or not)
## Getting started

`$ npm install react-native-bm-icon-button --save`

### Mostly automatic installation

`$ react-native link react-native-bm-icon-button`

## How to use
Start by adding
```javascript
import BmIconButton from 'react-native-bm-icon-button';
```

then use like this :
```javascript
<BmIconButton
  style={styles.menuButtonStyl}
  iconStyle={styles.menuButtonIconStyle}
  textStyle={styles.menuButtonTextStyle}
  text={this.props.module.title}
  icon={require('../icons/myicon.png')}
  action={this.onClick}/>
```
## Properties
| Prop  | Default  | Type | Description | Optional |
| --- | --- | --- | --- | --- |
| style | `width: 100%` | `style object`| Change the default style of the base button | yes
| iconStyle | - | `style object`| Change the default style of the icon in the button | yes
| textStyle | - | `style object`| Change the default style of the text in the button | yes
| text | - | `string`| Add a text under the icon button ( can be restyle ) | yes
| icon | - | icon like `require('../myicon.png')` or variable contain it| Add the icon to the button | yes
| action | - | `function`| add a callback function to the button | yes

By default all the properties are optional but if you want to use see it I propose to add at least one of these properties : `style`, `text`, `icon`

## Tips

By default the background take the full width of the screen
BUT if you want to crop it to the size of the icon add the style propertie with following lines :
```javascript
left: 0,
right: 0,
alignSelf:'center'
```

Enjoy :)
