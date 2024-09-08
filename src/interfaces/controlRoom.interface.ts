export interface ControlRoomConfigInterface {
  id: string;
  step: number;
  name: string;
  detail: string;
  timeLeft: string;
  progress: number;
  status: 'processing' | 'published';
  startDate: string;
  hasFeedBack: boolean;
  queuedAt: string;
}
