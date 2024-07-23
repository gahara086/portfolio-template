import React from 'react';
import { Box, Typography, Avatar, IconButton, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article'; // Qiitaのアイコンが直接はないため、ArticleIconを代用します
import Head from 'next/head';

// 共通のスタイルやコンポーネントを定義
const iconButtonStyle = {
  '&:hover': {
    transform: 'scale(1.1)',
    transition: 'transform 0.3s ease-in-out',
    color: '#FFD700' // ホバー時の色をゴールドに変更
  }
};

const HomePage = () => {
  return (
    <>
      <Head>
        <title>ポートフォリオ</title>
        <meta name="description" content="デモポートフォリオのホームページです。" />
      </Head>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'url(/HomePage/back.png)',
          backgroundSize: '1000px auto', // 画像を全体に収めるように変更
          backgroundPosition: 'center', // 画像を中央に配置
          backgroundRepeat: 'no-repeat', // 画像の繰り返しを防止
          margin: 4 // 他のコンポーネントとの間にスペースを確保
        }}
      >
        <Box
          sx={{
            maxWidth: 1000, // 最大幅を設定
            width: '100%', // コンテナの幅を100%に設定
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // 背景の半透明色
            padding: '20px', // 内部の余白
            borderRadius: '10px', // 角の丸み
            boxShadow: '0 3px 6px rgba(0,0,0,0.23)', // 影を追加して立体感を出す
            mb: 0.5, // 下の余白
          }}
        >
          <Avatar
            src="/HomePage/icon.png" // アイコンの画像
            sx={{ width: 90, height: 90, mb: 2 }} // アイコンのサイズと下の余白
          />
          <Typography variant="h4" sx={{ color: '#fff', mb: 1 }}>
            名前
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {/* GitHubのリンクボタン */}
            <Tooltip title="GitHub" arrow>
              <IconButton
                href="https://github.com/example" // TODO: 存在しないURLに変更する
                aria-label="GitHub"
                sx={iconButtonStyle}
              >
                <GitHubIcon sx={{ color: '#fff' }} />
              </IconButton>
            </Tooltip>
            {/* Qiitaのリンクボタン */}
            <Tooltip title="Qiita" arrow>
              <IconButton
                href="https://qiita.com/example" // TODO: 存在しないURLに変更する
                aria-label="Qiita"
                sx={iconButtonStyle}
              >
                <ArticleIcon sx={{ color: '#fff' }} />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
