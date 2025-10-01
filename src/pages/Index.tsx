import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

type GameScreen = 'menu' | 'game' | 'records' | 'characters' | 'settings';

interface Character {
  id: string;
  name: string;
  description: string;
  mechanic: string;
  activeFrom: string;
  image: string;
  unlocked: boolean;
}

const characters: Character[] = [
  {
    id: 'shiller',
    name: 'Shiller',
    description: 'Длинноногий человек, появляющийся в переднем окне',
    mechanic: 'Закрывать шторы при появлении',
    activeFrom: '12:00',
    image: '🕴️',
    unlocked: true
  },
  {
    id: 'huper',
    name: 'Huper',
    description: 'Гибрид паука и человека',
    mechanic: 'НЕ закрывать шторы, смотреть 3 секунды',
    activeFrom: '2:00',
    image: '🕷️',
    unlocked: true
  },
  {
    id: 'dadrom',
    name: 'Dadrom',
    description: 'Существо с множеством глаз на теле',
    mechanic: 'Отгонять вспышкой фотоаппарата',
    activeFrom: '4:00',
    image: '👁️',
    unlocked: true
  },
  {
    id: 'balod',
    name: 'Balod',
    description: 'Чёрная фигура с широкой безумной улыбкой',
    mechanic: 'Закрывать дверь при появлении',
    activeFrom: '5:00',
    image: '😈',
    unlocked: true
  },
  {
    id: 'maks',
    name: 'Maks',
    description: 'Призрак маленького мальчика - главный злодей',
    mechanic: 'Открытые глаза - фотоаппарат, стоит - смотреть, улыбается - камеры 3 сек',
    activeFrom: '5:00',
    image: '👻',
    unlocked: true
  },
  {
    id: 'shadow',
    name: 'Тень',
    description: 'Таинственная тень в камерах',
    mechanic: 'Включать фонарик через камеру',
    activeFrom: '11:00 (всегда активна)',
    image: '🌑',
    unlocked: true
  },
  {
    id: 'feareatter',
    name: 'Feareatter',
    description: 'Объединение всех монстров в одно существо',
    mechanic: 'Использует все механики одновременно',
    activeFrom: '6:00',
    image: '💀',
    unlocked: false
  }
];

export default function Index() {
  const [screen, setScreen] = useState<GameScreen>('menu');
  const [gameTime] = useState('23:00');
  const [doorClosed, setDoorClosed] = useState(false);
  const [curtainsClosed, setCurtainsClosed] = useState(false);
  const [cameraOpen, setCameraOpen] = useState(false);
  const [flashlightOn, setFlashlightOn] = useState(false);
  const [volume, setVolume] = useState([70]);
  const [graphics, setGraphics] = useState([100]);

  const records = [
    { rank: 1, name: 'Player1', time: '9:00' },
    { rank: 2, name: 'Player2', time: '8:45' },
    { rank: 3, name: 'Player3', time: '7:30' }
  ];

  return (
    <div className="min-h-screen bg-[#2D2D2D] text-white">
      {screen === 'menu' && (
        <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-[#1a1a1a] to-[#2D2D2D]">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-7xl font-bold mb-4 tracking-wider" style={{ textShadow: '0 0 30px rgba(255, 69, 0, 0.8), 0 0 60px rgba(187, 0, 0, 0.5)' }}>
              FIVE NIGHTS
            </h1>
            <h2 className="text-6xl font-bold mb-2 tracking-wider" style={{ textShadow: '0 0 30px rgba(255, 69, 0, 0.8), 0 0 60px rgba(187, 0, 0, 0.5)' }}>
              SURVIVAL
            </h2>
            <p className="text-orange-500 text-xl mt-6 animate-pulsate">Выживи с 23:00 до 9:00</p>
          </div>

          <div className="flex flex-col gap-4 w-80">
            <Button 
              onClick={() => setScreen('game')}
              className="h-16 text-2xl font-bold bg-gradient-to-r from-[#BB0000] to-[#8B0000] hover:from-[#CC0000] hover:to-[#9B0000] border-2 border-[#FF4500] shadow-lg"
              style={{ boxShadow: '0 10px 40px rgba(187, 0, 0, 0.4)' }}
            >
              Играть
            </Button>
            <Button 
              onClick={() => setScreen('records')}
              className="h-14 text-xl bg-[#1a1a1a] hover:bg-[#2a2a2a] border-2 border-[#FF4500]"
            >
              Рекорды
            </Button>
            <Button 
              onClick={() => setScreen('characters')}
              className="h-14 text-xl bg-[#1a1a1a] hover:bg-[#2a2a2a] border-2 border-[#FF4500]"
            >
              Персонажи
            </Button>
            <Button 
              onClick={() => setScreen('settings')}
              className="h-14 text-xl bg-[#1a1a1a] hover:bg-[#2a2a2a] border-2 border-[#FF4500]"
            >
              Настройки
            </Button>
          </div>
        </div>
      )}

      {screen === 'game' && (
        <div className="min-h-screen relative bg-[#1a1a1a]">
          <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent z-20">
            <Button 
              onClick={() => setScreen('menu')}
              variant="ghost"
              className="text-white hover:text-[#FF4500]"
            >
              <Icon name="ArrowLeft" size={24} className="mr-2" />
              Меню
            </Button>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#FF4500] animate-pulsate" style={{ textShadow: '0 0 20px rgba(255, 69, 0, 0.8)' }}>
                {gameTime}
              </div>
              <div className="text-sm text-gray-400">До 9:00</div>
            </div>
            <div className="flex gap-2">
              <Icon name="Zap" size={24} className="text-yellow-500" />
              <span className="text-yellow-500 font-bold">85%</span>
            </div>
          </div>

          <div className="h-screen flex items-center justify-center p-8 pt-32">
            <div className="relative w-full max-w-7xl">
              <Card className="bg-gradient-to-b from-[#2D2D2D] to-[#1a1a1a] border-4 border-[#BB0000] p-8 shadow-2xl" style={{ boxShadow: '0 20px 60px rgba(187, 0, 0, 0.4)' }}>
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <Card className="bg-[#1a1a1a] border-2 border-gray-600 p-6 h-64 flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="text-6xl mb-4 transition-all hover:scale-110">🪟</div>
                    <p className="text-sm text-gray-400 text-center">Правое окно</p>
                    <p className="text-xs text-orange-500 mt-2">Dadrom (4:00)</p>
                    {flashlightOn && (
                      <div className="absolute inset-0 bg-yellow-500/20 animate-pulsate"></div>
                    )}
                  </Card>

                  <Card className={`border-2 p-6 h-64 flex flex-col items-center justify-center cursor-pointer transition-all ${doorClosed ? 'bg-[#0a0a0a] border-red-500' : 'bg-[#1a1a1a] border-gray-600'}`}
                    onClick={() => setDoorClosed(!doorClosed)}
                  >
                    <Icon name={doorClosed ? "Lock" : "DoorOpen"} size={80} className={doorClosed ? "text-red-500" : "text-gray-400"} />
                    <p className="text-sm text-gray-400 text-center mt-4">{doorClosed ? 'Закрыто' : 'Открыто'}</p>
                    <p className="text-xs text-orange-500 mt-2">Balod (5:00)</p>
                  </Card>

                  <Card className={`border-2 p-6 h-64 flex flex-col items-center justify-center cursor-pointer transition-all ${curtainsClosed ? 'bg-[#0a0a0a] border-orange-500' : 'bg-[#1a1a1a] border-gray-600'}`}
                    onClick={() => setCurtainsClosed(!curtainsClosed)}
                  >
                    <div className="text-6xl mb-4">{curtainsClosed ? '🪟' : '🌙'}</div>
                    <p className="text-sm text-gray-400 text-center">{curtainsClosed ? 'Шторы закрыты' : 'Шторы открыты'}</p>
                    <p className="text-xs text-orange-500 mt-2">Shiller/Huper</p>
                  </Card>
                </div>

                <div className="flex justify-center gap-4">
                  <Button 
                    onClick={() => setCameraOpen(!cameraOpen)}
                    className={`h-16 px-8 text-lg ${cameraOpen ? 'bg-green-700 hover:bg-green-800' : 'bg-blue-700 hover:bg-blue-800'}`}
                  >
                    <Icon name="Camera" size={24} className="mr-2" />
                    {cameraOpen ? 'Камеры открыты' : 'Открыть камеры'}
                  </Button>
                  <Button 
                    onClick={() => setFlashlightOn(!flashlightOn)}
                    className={`h-16 px-8 text-lg ${flashlightOn ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-gray-700 hover:bg-gray-800'}`}
                  >
                    <Icon name="Flashlight" size={24} className="mr-2" />
                    Фотоаппарат
                  </Button>
                </div>

                {cameraOpen && (
                  <div className="absolute inset-0 bg-black/90 flex items-center justify-center z-10 animate-fade-in">
                    <Card className="bg-[#1a1a1a] border-2 border-green-500 p-8 w-full max-w-2xl">
                      <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-bold text-green-500">КАМЕРЫ</h3>
                        <Button onClick={() => setCameraOpen(false)} variant="ghost" className="text-red-500">
                          <Icon name="X" size={24} />
                        </Button>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <Card className="bg-black border border-green-500 p-4 h-48 flex items-center justify-center relative">
                          <div className="text-center">
                            <Icon name="Video" size={48} className="mx-auto mb-2 text-green-500" />
                            <p className="text-green-500 text-sm">Комната 1</p>
                          </div>
                          <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulsate"></div>
                        </Card>
                        <Card className="bg-black border border-green-500 p-4 h-48 flex items-center justify-center relative">
                          <div className="text-center">
                            <Icon name="Video" size={48} className="mx-auto mb-2 text-green-500" />
                            <p className="text-green-500 text-sm">Коридор</p>
                          </div>
                          <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulsate"></div>
                        </Card>
                      </div>
                      <Button 
                        onClick={() => setFlashlightOn(!flashlightOn)}
                        className="w-full mt-4 bg-yellow-600 hover:bg-yellow-700"
                      >
                        <Icon name="Lightbulb" size={20} className="mr-2" />
                        {flashlightOn ? 'Выключить фонарик' : 'Включить фонарик'}
                      </Button>
                    </Card>
                  </div>
                )}
              </Card>
            </div>
          </div>
        </div>
      )}

      {screen === 'records' && (
        <div className="min-h-screen p-8 bg-gradient-to-b from-[#1a1a1a] to-[#2D2D2D]">
          <Button 
            onClick={() => setScreen('menu')}
            variant="ghost"
            className="mb-8 text-white hover:text-[#FF4500]"
          >
            <Icon name="ArrowLeft" size={24} className="mr-2" />
            Назад
          </Button>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-8 text-center" style={{ textShadow: '0 0 20px rgba(255, 69, 0, 0.8)' }}>
              РЕКОРДЫ
            </h2>
            <div className="space-y-4">
              {records.map((record) => (
                <Card key={record.rank} className="bg-[#1a1a1a] border-2 border-[#BB0000] p-6 hover:border-[#FF4500] transition-colors">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-6">
                      <div className="text-4xl font-bold text-[#FF4500] w-12">#{record.rank}</div>
                      <div className="text-2xl font-bold">{record.name}</div>
                    </div>
                    <div className="text-3xl font-bold text-green-500">{record.time}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}

      {screen === 'characters' && (
        <div className="min-h-screen p-8 bg-gradient-to-b from-[#1a1a1a] to-[#2D2D2D]">
          <Button 
            onClick={() => setScreen('menu')}
            variant="ghost"
            className="mb-8 text-white hover:text-[#FF4500]"
          >
            <Icon name="ArrowLeft" size={24} className="mr-2" />
            Назад
          </Button>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold mb-8 text-center" style={{ textShadow: '0 0 20px rgba(255, 69, 0, 0.8)' }}>
              ПЕРСОНАЖИ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {characters.map((character) => (
                <Card 
                  key={character.id} 
                  className={`bg-[#1a1a1a] border-2 p-6 transition-all hover:scale-105 ${character.unlocked ? 'border-[#BB0000] hover:border-[#FF4500]' : 'border-gray-700 opacity-60'}`}
                  style={character.unlocked ? { boxShadow: '0 10px 40px rgba(187, 0, 0, 0.3)' } : {}}
                >
                  <div className="text-center">
                    <div className="text-7xl mb-4 filter drop-shadow-lg">
                      {character.unlocked ? character.image : '🔒'}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-[#FF4500]">{character.unlocked ? character.name : '???'}</h3>
                    {character.unlocked ? (
                      <>
                        <p className="text-sm text-gray-400 mb-3">{character.description}</p>
                        <div className="bg-[#2D2D2D] p-3 rounded-lg mb-2">
                          <p className="text-xs text-orange-500 font-semibold mb-1">МЕХАНИКА:</p>
                          <p className="text-sm">{character.mechanic}</p>
                        </div>
                        <div className="bg-[#2D2D2D] p-2 rounded-lg">
                          <p className="text-xs text-green-500 font-semibold">Активен: {character.activeFrom}</p>
                        </div>
                      </>
                    ) : (
                      <p className="text-sm text-gray-500 italic">Пройдите игру до конца</p>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}

      {screen === 'settings' && (
        <div className="min-h-screen p-8 bg-gradient-to-b from-[#1a1a1a] to-[#2D2D2D]">
          <Button 
            onClick={() => setScreen('menu')}
            variant="ghost"
            className="mb-8 text-white hover:text-[#FF4500]"
          >
            <Icon name="ArrowLeft" size={24} className="mr-2" />
            Назад
          </Button>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl font-bold mb-8 text-center" style={{ textShadow: '0 0 20px rgba(255, 69, 0, 0.8)' }}>
              НАСТРОЙКИ
            </h2>
            <Tabs defaultValue="sound" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-[#1a1a1a] border-2 border-[#BB0000]">
                <TabsTrigger value="sound" className="data-[state=active]:bg-[#BB0000]">Звук</TabsTrigger>
                <TabsTrigger value="graphics" className="data-[state=active]:bg-[#BB0000]">Графика</TabsTrigger>
                <TabsTrigger value="controls" className="data-[state=active]:bg-[#BB0000]">Управление</TabsTrigger>
              </TabsList>
              
              <TabsContent value="sound" className="mt-8">
                <Card className="bg-[#1a1a1a] border-2 border-[#BB0000] p-8">
                  <div className="space-y-8">
                    <div>
                      <label className="text-xl font-bold mb-4 block">Громкость: {volume[0]}%</label>
                      <Slider value={volume} onValueChange={setVolume} max={100} step={1} className="w-full" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg">Звуки окружения</span>
                      <Button className="bg-green-700 hover:bg-green-800">Включено</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg">Музыка</span>
                      <Button className="bg-green-700 hover:bg-green-800">Включено</Button>
                    </div>
                  </div>
                </Card>
              </TabsContent>
              
              <TabsContent value="graphics" className="mt-8">
                <Card className="bg-[#1a1a1a] border-2 border-[#BB0000] p-8">
                  <div className="space-y-8">
                    <div>
                      <label className="text-xl font-bold mb-4 block">Качество графики: {graphics[0]}%</label>
                      <Slider value={graphics} onValueChange={setGraphics} max={100} step={25} className="w-full" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg">Полноэкранный режим</span>
                      <Button className="bg-gray-700 hover:bg-gray-800">Выключено</Button>
                    </div>
                  </div>
                </Card>
              </TabsContent>
              
              <TabsContent value="controls" className="mt-8">
                <Card className="bg-[#1a1a1a] border-2 border-[#BB0000] p-8">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-[#2D2D2D] rounded">
                      <span>Открыть камеры</span>
                      <span className="font-bold text-[#FF4500]">ЛКМ / Пробел</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-[#2D2D2D] rounded">
                      <span>Использовать фотоаппарат</span>
                      <span className="font-bold text-[#FF4500]">ЛКМ / F</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-[#2D2D2D] rounded">
                      <span>Закрыть дверь</span>
                      <span className="font-bold text-[#FF4500]">ЛКМ</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-[#2D2D2D] rounded">
                      <span>Закрыть шторы</span>
                      <span className="font-bold text-[#FF4500]">ЛКМ</span>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      )}
    </div>
  );
}