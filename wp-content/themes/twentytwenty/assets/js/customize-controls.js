(function(){wp.customize.bind('ready',function(){wp.customize('accent_hue',function(value){value.bind(function(to){Object.keys(twentyTwentyBgColors).forEach(function(context){var backgroundColorValue;if(twentyTwentyBgColors[context].color){backgroundColorValue=twentyTwentyBgColors[context].color;}else{backgroundColorValue=wp.customize(twentyTwentyBgColors[context].setting).get();}
twentyTwentySetAccessibleColorsValue(context,backgroundColorValue,to);});});});Object.keys(twentyTwentyBgColors).forEach(function(context){wp.customize(twentyTwentyBgColors[context].setting,function(value){value.bind(function(to){twentyTwentySetAccessibleColorsValue(context,to,wp.customize('accent_hue').get(),to);});});});twentyTwentySetRetineLogoVisibility(!!wp.customize('custom_logo')());wp.customize('custom_logo',function(value){value.bind(function(to){twentyTwentySetRetineLogoVisibility(!!to);});});});function twentyTwentySetAccessibleColorsValue(context,backgroundColor,accentHue){var value,colors;value=wp.customize('accent_accessible_colors').get();value=(_.isObject(value)&&!_.isArray(value))?value:{};colors=twentyTwentyColor(backgroundColor,accentHue);if(colors.getAccentColor()&&'function'===typeof colors.getAccentColor().toCSS){value[context]={text:colors.getTextColor(),accent:colors.getAccentColor().toCSS(),background:backgroundColor};value[context].borders=colors.bgColorObj.clone().getReadableContrastingColor(colors.bgColorObj,1.36).toCSS();value[context].secondary=colors.bgColorObj.clone().getReadableContrastingColor(colors.bgColorObj).s(colors.bgColorObj.s()/2).toCSS();}
wp.customize('accent_accessible_colors').set(value);wp.customize('accent_accessible_colors')._dirty=true;}
function twentyTwentySetRetineLogoVisibility(visible){wp.customize.control('retina_logo').container.toggle(visible);}}(jQuery));