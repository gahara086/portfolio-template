import React, { useState } from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText, ListItemIcon, Link, Dialog, DialogContent, Grow } from '@mui/material';
import Slider from 'react-slick'; // 画像スライダーライブラリ
import ScienceIcon from '@mui/icons-material/Science'; // 科学的な学習のアイコン
import BrushIcon from '@mui/icons-material/Brush'; // デザインのアイコン
import StarIcon from '@mui/icons-material/Star'; // 成就や成果を示すアイコン
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined'; // 個人学習のアイコン
import ComputerIcon from '@mui/icons-material/Computer'; // プログラミングのアイコン
import "slick-carousel/slick/slick.css"; // スライダーのスタイル
import "slick-carousel/slick/slick-theme.css"; // スライダーのテーマ

// 学習内容に関する情報の型定義
interface Achievement {
  content: string; // 達成内容
  description: string; // 詳細説明
  images: string[]; // 画像のURLリスト
  url?: string; // 任意のURL（例えば、サンプルアプリへのリンク）
}

interface Study {
  title: string; // 学習タイトル
  icon: JSX.Element; // アイコン
  achievements: Achievement[]; // 達成項目のリスト
}

// 学習ガイドのデータ
const studyGuide: Study[] = [
  {
    title: 'データサイエンス',
    icon: <ScienceIcon />,
    achievements: [
      {
        content: 'Pythonでデータ分析',
        description: 'Pythonを使用してデータ解析のプロジェクトを実施。Pandas、NumPy、Matplotlibを用いたデータの可視化と分析。',
        images: [],
      }
    ],
  },
  {
    title: 'グラフィックデザイン',
    icon: <BrushIcon />,
    achievements: [
      {
        content: 'デザインツールの習得',
        description: 'Adobe IllustratorやPhotoshopを使って、グラフィックデザインのスキルを向上させるためのトレーニングを受けました。',
        images: []
      }
    ],
  },
  {
    title: 'プログラミング言語の習得',
    icon: <ComputerIcon />,
    achievements: [
      {
        content: '新しいプログラミング言語の学習',
        description: 'Go言語やRust言語を学習し、それぞれの特性と用途を理解するためのプロジェクトを進めました。',
        images: ['/StudyGuide/study_1.png','/StudyGuide/study_2.png']
      }
    ],
  }
];

// 学習ガイドを表示するコンポーネント
const StudyGuide: React.FC = () => {
  const [open, setOpen] = useState(false); // 画像ダイアログの開閉状態
  const [selectedImage, setSelectedImage] = useState(''); // 選択された画像のURL
  const paperWidth = 1000; // Paperコンポーネントの最大幅

  // 画像をクリックした際にダイアログを開く処理
  const handleClickOpen = (image: string) => {
    setSelectedImage(image);
    setOpen(true);
  };

  // ダイアログを閉じる処理
  const handleClose = () => {
    setOpen(false);
  };

  // スライダーの設定
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }}>
      <Grow in={true} style={{ transformOrigin: '0 0 0' }} timeout={1000}>
        <Paper elevation={6} sx={{ maxWidth: paperWidth, width: '100%', padding: 2 }}>
          {/* セクションタイトル */}
          <Typography variant="h5" sx={{ textAlign: 'left', margin: 2 }}>
            <LightbulbOutlinedIcon />
            個人学習
          </Typography>
          {/* 学習ガイドデータをマップして表示 */}
          {studyGuide.map((study, index) => (
            <Box key={index} sx={{ margin: 2 }}>
              <Typography variant="h5" sx={{ marginBottom: 1, display: 'flex', alignItems: 'center' }}>
                {study.icon}
                <span style={{ marginLeft: 10 }}>{study.title}</span>
              </Typography>
              <List>
                {study.achievements.map((achievement, idx) => (
                  <ListItem key={idx} sx={{ alignItems: 'flex-start' }}>
                    <ListItemIcon>
                      <StarIcon />
                    </ListItemIcon>
                    <ListItemText primary={achievement.content} secondary={achievement.description} />
                    {/* 画像がある場合はスライダーを表示 */}
                    <Box sx={{ width: 160, height: 90, marginLeft: 2 }}>
                      {achievement.images.length > 0 ? (
                        <Slider {...settings}>
                          {achievement.images.map((image, imageIndex) => (
                            <div key={imageIndex} onClick={() => handleClickOpen(image)}>
                              <img src={image} alt={`Image of ${achievement.content}`} style={{ width: '100%', maxHeight: 75, objectFit: 'contain', cursor: 'pointer' }} />
                            </div>
                          ))}
                        </Slider>
                      ) : null}
                    </Box>
                    {/* URLがある場合はリンクを表示 */}
                    {achievement.url && (
                      <Link href={achievement.url} target="_blank" rel="noopener">
                        詳細
                      </Link>
                    )}
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </Paper>
      </Grow>
      {/* 画像ダイアログ */}
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <DialogContent>
          <img src={selectedImage} alt="Selected" style={{ width: '100%', height: 'auto' }} />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default StudyGuide;
