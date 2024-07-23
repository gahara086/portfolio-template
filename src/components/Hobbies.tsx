import React, { useState } from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText, ListItemIcon, CardMedia, Dialog, DialogTitle, DialogContent, Grow } from '@mui/material';
import StarIcon from '@mui/icons-material/Star'; // 成就や成果を示すアイコン
import TravelExploreIcon from '@mui/icons-material/TravelExplore'; // 旅行のアイコン
import MusicNoteIcon from '@mui/icons-material/MusicNote'; // 音楽のアイコン

// 達成内容に関する情報の型定義
interface Achievement {
  content: string; // 達成内容
  description: string; // 詳細説明
  images: string[]; // 画像のURLリスト
}

// 趣味に関する情報の型定義
interface Hobby {
  title: string; // 趣味のタイトル
  icon: JSX.Element; // アイコン
  achievements: Achievement[]; // 達成項目のリスト
}

// 趣味のデータセット
const hobbies: Hobby[] = [
  {
    title: '旅行',
    icon: <TravelExploreIcon />,
    achievements: [
      {
        content: 'ヨーロッパ訪問',
        description: 'ヨーロッパを訪問し、多文化体験をしました。',
        images: ['/Hobby/travel.png']
      },
      {
        content: '南米バックパッキング旅行',
        description: '南米でのバックパッキング旅行を通じて、自然と歴史を学びました。',
        images: []
      }
    ],
  },
  {
    title: '音楽鑑賞',
    icon: <MusicNoteIcon />,
    achievements: [
      {
        content: '音楽フェス',
        description: '地元の音楽フェスに参加',
        images: []
      }
    ],
  }
];

// 趣味を表示するコンポーネント
const Hobby: React.FC = () => {
  const [open, setOpen] = useState(false); // 画像ダイアログの開閉状態
  const [selectedImage, setSelectedImage] = useState(''); // 選択された画像のURL

  // 画像をクリックした際にダイアログを開く処理
  const handleClickOpen = (image: string) => {
    setSelectedImage(image);
    setOpen(true);
  };

  // ダイアログを閉じる処理
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }}>
      <Grow in={true} style={{ transformOrigin: '0 0 0' }} timeout={1000}>
        <Paper elevation={6} sx={{ width: 1000, padding: 2 }}>
          {/* セクションタイトル */}
          <Typography variant="h5" sx={{ textAlign: 'left', margin: 2, display: 'flex', alignItems: 'center' }}>
            <StarIcon sx={{ marginRight: 1 }} />趣味
          </Typography>
          {/* 趣味データをマップして表示 */}
          {hobbies.map((hobby, index) => (
            <Box key={index} sx={{ margin: 2 }}>
              <Typography variant="h5" sx={{ marginBottom: 1, display: 'flex', alignItems: 'center' }}>
                {hobby.icon}
                <span style={{ marginLeft: 10 }}>{hobby.title}</span>
              </Typography>
              <List>
                {hobby.achievements.map((achievement, idx) => (
                  <ListItem key={idx} sx={{ alignItems: 'flex-start' }}>
                    <ListItemIcon>
                      <StarIcon />
                    </ListItemIcon>
                    <ListItemText primary={achievement.content} secondary={achievement.description} />
                    {/* 画像がある場合は画像を表示し、クリックでダイアログを開く */}
                    {achievement.images.map((image, imageIndex) => (
                      <CardMedia
                        key={imageIndex}
                        component="img"
                        sx={{ width: 160, height: 90, marginLeft: 2, cursor: 'pointer' }}
                        image={image}
                        alt={`Image of ${achievement.content}`}
                        onClick={() => handleClickOpen(image)}
                      />
                    ))}
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </Paper>
      </Grow>
      {/* 画像ダイアログ */}
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Grow} // アニメーションの追加
        transitionDuration={500}  // アニメーションの時間を調整
      >
        <DialogTitle></DialogTitle>
        <DialogContent>
          <img src={selectedImage} alt="Selected" style={{ width: '100%', height: 'auto' }} />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Hobby;
