import React from 'react';
import { Box, Typography, Paper, Grow, Divider } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import CakeIcon from '@mui/icons-material/Cake';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import AccountBoxIcon from '@mui/icons-material/AccountBox'; // プロフィールアイコン
import LandscapeIcon from '@mui/icons-material/Landscape';

const AboutMe = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grow in={true} style={{ transformOrigin: '0 0 0' }} timeout={1000}>
        <Paper
          elevation={6}
          sx={{
            maxWidth: 1000,
            width: '100%',
            display: 'flex',
            flexDirection: 'row', // 列から行へ変更
            p: 4,
            backgroundColor: '#fafafa'
          }}
        >
          <Box sx={{ width: '60%', marginRight: 2 }}>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: 'medium' }}>
              <PersonIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
              自己紹介
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              こんにちは。私はソフトウェアエンジニアとして活動しています。<br />
              システムの設計から実装、デプロイメントまで幅広い業務に携わってきました。
              特にプログラミングにおいては、コードレビューや最適化に力を入れており、プロジェクトの成功に貢献しています。 <br />
              現在は、顧客との調整を行いながら、より良い製品の開発を目指しています。技術的な挑戦に加え、顧客のニーズを的確に捉えることに注力しています。
            </Typography>
          </Box>
          <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
          <Box sx={{ width: '40%' }}>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 'medium' }}>
              <AccountBoxIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
              プロフィール
            </Typography>
            <Typography variant="h6" sx={{ mb: 1 }}>
              基本情報
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <CakeIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
              年齢: 30歳
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <LandscapeIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
              出身地: 県名
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <EmailIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
              メールアドレス: example@example.com
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <PhoneIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
              電話番号: 000-1234-5678
            </Typography>
          </Box>
        </Paper>
      </Grow>
    </Box>
  );
};

export default AboutMe;
