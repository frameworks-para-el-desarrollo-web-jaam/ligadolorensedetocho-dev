import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'
import React from 'react'
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings:{
      React:{version:'19.2.0'}
    },
    plugins:{
      React, 'react-hooks':reactHooks,
      'react-refresh':reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...React.configs.recommended.configs,
      ...React.configs['jsx-runtime'].rules,
      ... reactHooks.configs.recommended.rules,
      'reac/ksx-notarget-blank':'off',
      'react-refresh/only-export-components':[
        'warn',
        {allowcontanteexport:true},
      ],
      'react/prop-types':0,
    },
  },
])
