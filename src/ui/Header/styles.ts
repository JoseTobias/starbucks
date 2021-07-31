import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing }) => ({
  header: {
    height: spacing(9),
  },
  logo: {
    width: 51,
  },
  toggleThemeButton: {
    marginLeft: 'auto',
    marginRight: spacing(1),
  },
}));
