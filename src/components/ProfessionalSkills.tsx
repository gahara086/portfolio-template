import React from 'react';
import { Box, Typography, LinearProgress, Paper, Grow, Icon } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ComputerIcon from '@mui/icons-material/Computer';

// スキルの型定義
interface Skill {
  name: string; // スキルの名前
  level: string; // スキルレベル
  icon: React.ElementType; // スキルに関連するアイコン
}

// スキルのデータ
const programmingSkills: Skill[] = [
  { name: 'JavaScript', level: 'Expert', icon: CodeIcon },
  { name: 'React', level: 'Advanced', icon: CodeIcon },
  { name: 'Node.js', level: 'Intermediate', icon: CodeIcon },
  { name: 'SQL', level: 'Advanced', icon: StorageIcon },
  { name: 'Python', level: 'Intermediate', icon: StorageIcon },
  { name: 'Docker', level: 'Beginner', icon: StorageIcon },
  { name: 'DevOps', level: 'Intermediate', icon: AccountTreeIcon },
  { name: 'API Development', level: 'Advanced', icon: CodeIcon },
];

// スキルレベルに応じた色を取得する関数
const getColorFromLevel = (level: string) => {
  switch (level) {
    case 'Expert':
      return '#1E90FF'; // 青
    case 'Advanced':
      return '#32CD32'; // ライム
    case 'Intermediate':
      return '#FFA500'; // オレンジ
    case 'Beginner':
      return '#FF6347'; // トマト
    default:
      return '#000000'; // デフォルトは黒
  }
};

// スキルレベルに応じた値を取得する関数
const getValueFromLevel = (level: string) => {
  switch (level) {
    case 'Expert':
      return 90;
    case 'Advanced':
      return 80;
    case 'Intermediate':
      return 60;
    case 'Beginner':
      return 40;
    default:
      return 0;
  }
};

// スキルバーコンポーネント
interface SkillBarProps {
  name: string; // スキルの名前
  level: string; // スキルレベル
  icon: React.ElementType; // アイコンコンポーネント
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, icon }) => {
  // スクロールで表示されるかどうかを監視するフック
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  // スキルレベルに基づいた色と値を取得
  const color = getColorFromLevel(level);
  const value = getValueFromLevel(level);

  return (
    <Grow in={inView} style={{ transformOrigin: '0 0 0' }} timeout={{ enter: 1000, exit: 500 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: 1 }} ref={ref}>
        {/* スキルアイコン */}
        <Icon component={icon} sx={{ mr: 1 }} />
        {/* スキル名 */}
        <Typography sx={{ width: '30%' }}>{name}</Typography>
        <Box sx={{ width: '70%', height: 20, marginRight: 2, position: 'relative' }}>
          {/* スキルレベルバー */}
          <LinearProgress
            variant="determinate"
            value={inView ? value : 0} // スクロールで表示された時のみ値を更新
            sx={{
              height: '100%',
              width: '100%',
              '& .MuiLinearProgress-bar': {
                backgroundColor: color, // スキルレベルに応じた色
                transition: 'transform 2s ease-out' // スムーズなアニメーション
              }
            }}
          />
          {/* スキルレベルのテキスト */}
          <Typography sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            textAlign: 'center',
            lineHeight: '20px',
            color: 'white',
            fontSize: '0.75rem'
          }}>
            {level}
          </Typography>
        </Box>
      </Box>
    </Grow>
  );
};

// プロフェッショナルスキルコンポーネント
const ProfessionalSkills: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 4 }}>
      <Grow in={true} style={{ transformOrigin: '0 0 0' }} timeout={1000}>
        <Paper elevation={6} sx={{ maxWidth: 1000, width: '100%', padding: 4, backgroundColor: '#fafafa' }}>
          <Typography variant="h5" sx={{ textAlign: 'left', margin: 2 }}>
            <Icon component={ComputerIcon} sx={{ mr: 1, verticalAlign: 'bottom' }} />プログラミングスキル
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ width: '100%' }}>
              {/* 各スキルバーコンポーネントをマップして表示 */}
              {programmingSkills.map(skill => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </Box>
          </Box>
        </Paper>
      </Grow>
    </Box>
  );
};

export default ProfessionalSkills;
