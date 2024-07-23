import { Container, Typography, Link, List, ListItem, ListItemText, Collapse, ListItemIcon } from '@mui/material';
import { useState, useCallback } from 'react';
import BookIcon from '@mui/icons-material/Book';
import UpdateIcon from '@mui/icons-material/Update';
import ShareIcon from '@mui/icons-material/Share';
import ReduceCapacityIcon from '@mui/icons-material/ReduceCapacity';
import LoopIcon from '@mui/icons-material/Loop';
import CalculateIcon from '@mui/icons-material/Calculate';
import TouchAppIcon from '@mui/icons-material/TouchApp';

interface HookDetail {
  name: string;
  description: string;
  detail: string;
  useCase: string;
  link: string;
  icon: React.ElementType;
  implement: boolean;
}

const hooksData: HookDetail[] = [
  {
    name: 'useState',
    description: '状態管理の基本',
    detail: 'useStateは、関数コンポーネント内で状態管理を可能にするHookです。状態が更新されると、コンポーネントは再レンダリングされます。',
    useCase: 'ユーザーの入力フォームやオン/オフの切り替えスイッチのUIコンポーネントの状態管理。',
    link: '/study/useState',
    icon: BookIcon,
    implement: true
  },
  {
    name: 'useEffect',
    description: '副作用を扱うためのHook',
    detail: 'useEffectは、副作用（外部APIへのリクエスト、購読の設定、手動でのDOM更新など）を関数コンポーネント内で実行できるようにするHookです。',
    useCase: 'APIからデータをフェッチし、データをコンポーネントにロードする際に使用。',
    link: '/study/useEffect',
    icon: UpdateIcon,
    implement: false
  },
  {
    name: 'useContext',
    description: 'コンテキストを使った状態の共有',
    detail: 'useContextは、コンテキストを利用して、異なるコンポーネント間でデータを共有するためのHookです。',
    useCase: 'テーマや言語設定など、アプリケーション全体で共有されるべきデータの管理。',
    link: '/study/useContext',
    icon: ShareIcon,
    implement: false
  },
  {
    name: 'useReducer',
    description: '複雑な状態ロジックを扱う',
    detail: 'useReducerは、状態更新ロジックをコンポーネント外に分離することができるHookで、特に複雑な状態ロジックや子コンポーネント間での状態共有に適しています。',
    useCase: 'ショッピングカートのような複雑な状態ロジックを持つコンポーネントで使用。',
    link: '/study/useReducer',
    icon: ReduceCapacityIcon,
    implement: false
  },
  {
    name: 'useCallback',
    description: '不要な関数再作成を防ぐ',
    detail: 'useCallbackは、特定の依存が変更された場合にのみ関数を再生成することを可能にするHookです。',
    useCase: '高コストな計算を行う関数をメモ化し、再レンダリング時のパフォーマンスを最適化する。',
    link: '/study/useCallback',
    icon: LoopIcon,
    implement: false
  },
  {
    name: 'useMemo',
    description: '計算コストの高い値のメモ化',
    detail: 'useMemoは、計算コストの高い関数の戻り値をメモ化し、依存値が変更された場合にのみ再計算を行うようにするHookです。',
    useCase: '大量データを処理する表のレンダリング性能を向上させる。',
    link: '/study/useMemo',
    icon: CalculateIcon,
    implement: false
  },
  {
    name: 'useRef',
    description: '参照の保持',
    detail: 'useRefは、レンダリング間で値を保持するためのHookです。これは変数への直接的なアクセスを可能にし、その値が変更されてもコンポーネントが再レンダリングされることはありません。',
    useCase: 'DOM要素への直接アクセスが必要な場合、例えばフォーム要素に自動的にフォーカスを当てる。',
    link: '/study/useRef',
    icon: TouchAppIcon,
    implement: false
  }
];

const Home = () => {
  const [open, setOpen] = useState<string | null>(null);

  const handleClick = useCallback((name: string) => {
    setOpen(prev => prev === name ? null : name);
  }, []);

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        React Hooks 概要
      </Typography>
      <Typography variant="body2">
      React Hooksは関数コンポーネントでstateやライフサイクル機能を使えるようにするAPIです。これにより、関数コンポーネントでも以前のクラスコンポーネントの機能が利用可能になります。
      </Typography>
      <List>
        {hooksData.map((hook) => (
          <>
            <ListItem button onClick={() => handleClick(hook.name)}>
              <ListItemIcon>
                <hook.icon />
              </ListItemIcon>
              <ListItemText primary={hook.name} secondary={hook.description} />
            </ListItem>
            <Collapse in={open === hook.name} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem sx={{ pl: 4 }}>
                  <Typography variant="body2">{hook.detail}</Typography>
                </ListItem>
                <ListItem sx={{ pl: 4 }}>
                  <Typography variant="body2" color="textSecondary">
                    利用用途: {hook.useCase}
                  </Typography>
                </ListItem>
                {hook.implement ?
                  (<ListItem component={Link} href={hook.link} sx={{ pl: 4 }}>
                    <Typography variant="body2" color="primary">
                      サンプルアプリ
                    </Typography>
                  </ListItem>)
                  : (<Typography variant="body2" color="textSecondary" sx={{ pl: 4 }}>
                    サンプルアプリ作成中
                  </Typography>)
                }
              </List>
            </Collapse>
          </>
        ))}
      </List>
    </Container>
  );
};

export default Home;
