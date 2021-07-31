import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing }) => ({
  card: {
    padding: spacing(3),
    display: 'flex',
    justifyContent: 'space-between',
  },
  image: {
    width: spacing(6),
  },
}));
