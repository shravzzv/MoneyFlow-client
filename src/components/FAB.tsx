import { plusIcon } from '@progress/kendo-svg-icons'
import {
  FloatingActionButton,
  FloatingActionButtonThemeColor,
} from '@progress/kendo-react-buttons'
import { Tooltip } from '@progress/kendo-react-tooltip'
import { FC } from 'react'

interface FABProps {
  themeColor: FloatingActionButtonThemeColor | undefined
  tooltip: string
  testId?: string
  onClick?: () => void
}

const FAB: FC<FABProps> = ({
  themeColor,
  tooltip,
  testId = '',
  onClick,
}: FABProps) => {
  return (
    <Tooltip anchorElement='target' position='auto'>
      <FloatingActionButton
        themeColor={themeColor}
        svgIcon={plusIcon}
        alignOffset={{ x: 20, y: 70 }}
        className='static-fab'
        title={tooltip}
        data-testid={testId}
        onClick={onClick}
      />
    </Tooltip>
  )
}

export default FAB
