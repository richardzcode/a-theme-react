# A Theme React

AWS Amplify UI is theme based. Developers are able to customize UI with theme.

Here we build alternative themes for AWS Amplify.

* [Install](#install)
* [Apply](#apply)
* [Themes](#themes)
  - [Bootstrap](#bootstrap)

## Install

```
npm install --save a-theme-react
```

## Apply

AWS Amplify UI is theme

```
import { Bootstrap } from 'a-theme-react';

<Authenticator theme={Bootstrap} />
```

## Themes

### Bootstrap

<img src="a_theme_bootstrap.png" width="360" />

```
import { Bootstrap } from 'a-theme-react';

<Authenticator theme={Bootstrap} />
```

**FontAwsome Icons**

`Bootstrap` theme uses icons from [Font Awesome](http://fontawesome.io/). [react-fontawesome](https://github.com/danawoodman/react-fontawesome) does not include CSS. So you have to include the CSS by yourself. One way is from [CDN](https://www.bootstrapcdn.com/fontawesome/).

For example add this line to HTML file:
```
<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
```
