import React from 'react';
import { Box, Typography, Paper, Grow, Chip, Link } from '@mui/material';
import { WorkOutline as WorkOutlineIcon } from '@mui/icons-material';
import { Build as BuildIcon, Laptop as LaptopIcon } from '@mui/icons-material';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import { Timeline, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';

// 経験の型定義
interface Experience {
  title: string; // 職務タイトル
  period: string; // 職務期間
  role: string; // 役職
  description: string; // 職務内容の説明
  technologies: string[]; // 使用技術
  links: { url: string; title: string }[]; // 関連リンク
  icon: React.ReactElement; // 職務に関連するアイコン
}

// 職務経験のデータ
const experiences: Experience[] = [
  {
    title: 'Webアプリケーション開発',
    period: '2021年 5月 - 現在',
    role: 'シニアエンジニア',
    description: 'フルスタックのWebアプリケーションの設計・開発を担当しました。フロントエンドからバックエンドまで、幅広い技術スタックを使用して、ユーザーに優れた体験を提供しました。',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Docker'],
    links: [
      { url: 'https://example.com/project', title: 'プロジェクト概要' }
    ],
    icon: <BuildIcon />
  },
  {
    title: '企業向けシステム統合',
    period: '2018年 3月 - 2021年 4月',
    role: 'プロジェクトリーダー',
    description: '企業向けのシステム統合プロジェクトをリードし、異なるシステム間でのデータ統合とプロセスの最適化を実施しました。プロジェクトの成功により、業務効率が大幅に向上しました。',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'Jenkins'],
    links: [
      { url: 'https://example.com/overview', title: 'プロジェクト概要' }
    ],
    icon: <LaptopIcon />
  }
];

// 職務経歴を表示するコンポーネント
const WorkExperience: React.FC = () => {
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
          <Typography variant="h5" sx={{ textAlign: 'left', margin: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
            <WorkOutlineIcon />
            職務経歴
          </Typography>
          <Timeline sx={{ [`& .${timelineItemClasses.root}:before`]: { flex: 0, padding: 0 } }}>
            {/* 経験のリストをマップして表示 */}
            {experiences.map((exp, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  {/* タイムラインのドットとコネクタ */}
                  <TimelineDot />
                  {index !== experiences.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2, textAlign: 'left' }}>
                  {/* 職務タイトルとアイコン */}
                  <Typography variant="h5" color="primary.main" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {exp.icon}
                    {exp.title}
                  </Typography>
                  {/* 役職 */}
                  <Typography variant="subtitle1" color="textSecondary">{exp.role}</Typography>
                  {/* 職務期間 */}
                  <Typography variant="subtitle2">{exp.period}</Typography>
                  {/* 職務内容の説明 */}
                  <Typography>{exp.description}</Typography>
                  <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {/* 使用技術のチップ */}
                    {exp.technologies.map((tech, i) => (
                      <Chip key={i} label={tech} variant="outlined" color="primary" />
                    ))}
                  </Box>
                  {/* 関連リンク */}
                  {exp.links.map((link, i) => (
                    <Link key={i} href={link.url} target="_blank" rel="noopener" sx={{ mt: 1, display: 'block' }}>
                      {link.title}
                    </Link>
                  ))}
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Paper>
      </Grow>
    </Box>
  );
};

export default WorkExperience;
