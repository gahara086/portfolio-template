import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText, ListItemIcon, Grow } from '@mui/material';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty'; // 取得予定の資格アイコン
import ComputerIcon from '@mui/icons-material/Computer'; // 基本情報技術者のアイコン
import DriveEtaIcon from '@mui/icons-material/DriveEta'; // 普通自動車第一種運転免許のアイコン
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn'; // 資格のアイコン
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'; // 資格セクションのアイコン
import ComputerTwoToneIcon from '@mui/icons-material/ComputerTwoTone'; // 応用情報技術者のアイコン

// 資格情報の型定義
interface Qualification {
  title: string; // 資格のタイトル
  year: string; // 資格取得予定年または取得年
  status: 'completed' | 'planned'; // 資格の取得ステータス
  icon: React.ReactElement; // アイコン
}

// 資格データの配列
const qualifications: Qualification[] = [
  {
    title: '基本情報技術者',
    year: '2021',
    status: 'completed',
    icon: <ComputerIcon />
  },
  {
    title: '応用情報技術者',
    year: '2022',
    status: 'completed',
    icon: <ComputerTwoToneIcon />
  },
  {
    title: 'データベーススペシャリスト',
    year: '2023',
    status: 'completed',
    icon: <AssignmentTurnedInIcon />
  },
  {
    title: 'セキュリティスペシャリスト',
    year: '2024',
    status: 'planned',
    icon: <AssignmentTurnedInIcon />
  },
  {
    title: '普通自動車第一種運転免許',
    year: '2019',
    status: 'completed',
    icon: <DriveEtaIcon />
  }
];

// 資格を表示するコンポーネント
const Qualification: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 4
      }}
    >
      <Grow in={true} style={{ transformOrigin: '0 0 0' }} timeout={1000}>
        <Paper
          elevation={6}
          sx={{
            maxWidth: 1000,
            width: '100%',
            padding: 4,
            backgroundColor: '#fafafa'
          }}
        >
          {/* セクションタイトル */}
          <Typography variant="h5" sx={{ textAlign: 'left', margin: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
            <EmojiEventsIcon /> 資格
          </Typography>
          {/* 資格リスト */}
          <List>
            {/* 資格データをマップしてリストアイテムを表示 */}
            {qualifications.map((qual, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  {/* 取得済みの資格には資格のアイコン、取得予定の資格には砂時計アイコンを表示 */}
                  {qual.status === 'completed' ? qual.icon : <HourglassEmptyIcon />}
                </ListItemIcon>
                <ListItemText
                  primary={qual.title} // 資格のタイトル
                  secondary={`取得年: ${qual.year} (${qual.status === 'completed' ? '取得済み' : '取得予定'})`} // 資格の年とステータス
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grow>
    </Box>
  );
};

export default Qualification;
