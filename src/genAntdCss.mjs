import fs from 'fs';
import { extractStyle } from '@ant-design/static-style-extract';
import React from 'react';
import { ConfigProvider } from 'antd';

const theme = {
  token: {},
};

const outputPath = './styles/antd.min.css';

const cssText = extractStyle((node) => {
    return React.createElement(ConfigProvider, {
        theme: theme,
    }, node
    );
});

fs.writeFileSync(outputPath, cssText);