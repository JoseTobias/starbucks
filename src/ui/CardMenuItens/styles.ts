import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing }) => ({
  card: {
    padding: spacing(2),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));
