import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, palette, shape }) => ({
  header: {
    height: spacing(9),
  },
  cardContainer: {
    backgroundColor: palette.background.default,
    borderRadius: `0 0 ${shape.borderRadius}px ${shape.borderRadius}px`,
  },
  logo: {
    width: 51,
  },
  toggleThemeButton: {
    marginLeft: 'auto',
    marginRight: spacing(1),
  },
}));
