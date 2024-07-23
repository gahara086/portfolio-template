import React from 'react';
import { Box, Typography, Paper, Grow, Link } from '@mui/material';
import { School as SchoolIcon, EmojiEvents as HighSchoolIcon, Engineering as UniversityIcon } from '@mui/icons-material';
import { Timeline, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';

// 学歴情報の型定義
interface Education {
  degree: string; // 学位または専攻
  school: string; // 学校名
  period: string; // 学習期間
  description: string; // 学校での説明または専攻内容
  icon: React.ReactElement; // 学校に関連するアイコン
  thesis?: {
    title: string; // 卒論のタイトル
    summary: string; // 卒論の概要
  }; // 卒論情報
  action?: {
    title: string; // 成果物のタイトル
    summary: string; // 成果物のリンク
  }; // 成果物情報
}

// 学歴データの配列
const educationHistory: Education[] = [
  {
    degree: 'コンピュータサイエンス',
    school: '〇〇大学',
    period: '2016 - 2021',
    description: 'コンピュータサイエンスを専攻し、ソフトウェア開発やシステム設計に関する幅広い知識を学びました。',
    thesis: {
      title: '機械学習を用いたデータ分析',
      summary: '大規模データセットを用いて、機械学習アルゴリズムを実装し、データ分析の精度向上を目指しました。'
    },
    action: {
      title: '大学内コンペティションで最優秀賞を受賞',
      summary: 'https://example.com/award'
    },
    icon: <UniversityIcon />
  },
  {
    degree: '',
    school: '〇〇高等学校',
    period: '2013 - 2016',
    description: '理系科目に重点を置き、数学と科学を中心に学びました。',
    icon: <HighSchoolIcon />
  },
  {
    degree: '',
    school: '〇〇中学校',
    period: '2010 - 2013',
    description: '',
    icon: <SchoolIcon />
  }
];

// 学歴を表示するコンポーネント
const Education: React.FC = () => {
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
            flexDirection: 'row', // 列から行への変更
            p: 4,
            backgroundColor: '#fafafa'
          }}
        >
          <Typography variant="h5" sx={{ textAlign: 'center', margin: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
            <SchoolIcon />
            学歴
          </Typography>
          <Timeline sx={{ [`& .${timelineItemClasses.root}:before`]: { flex: 0, padding: 0 } }}>
            {/* 学歴のリストをマップして表示 */}
            {educationHistory.map((edu, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  {/* タイムラインのドットとコネクタ */}
                  <TimelineDot color="primary">
                    {edu.icon}
                  </TimelineDot>
                  {index !== educationHistory.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  {/* 学校名 */}
                  <Typography variant="h5" color="primary.main">{edu.school}</Typography>
                  {/* 学位または専攻 */}
                  <Typography variant="h6" color="primary.main">{edu.degree}</Typography>
                  {/* 学習期間 */}
                  <Typography variant="subtitle2">{edu.period}</Typography>
                  {/* 学校での説明 */}
                  <Typography>{edu.description}</Typography>
                  {edu.thesis && (
                    <>
                      {/* 卒論タイトルと概要 */}
                      <Typography sx={{ mt: 1, fontWeight: 'bold' }}>卒論タイトル: {edu.thesis.title}</Typography>
                      <Typography sx={{ mt: 0.5 }}>卒論概要: {edu.thesis.summary}</Typography>
                    </>
                  )}
                  {edu.action && (
                    <>
                      {/* 成果物タイトルとリンク */}
                      <Typography sx={{ mt: 1 }}>{edu.action.title}:
                        <Link href={edu.action.summary} target="_blank" rel="noopener">
                          詳細はこちら
                        </Link>
                      </Typography>
                    </>
                  )}
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Paper>
      </Grow>
    </Box>
  );
};

export default Education;
