import { LoadingDots } from '#components';
import { useMount } from '#hooks';
import { Paths } from '#navigation/routes';
import i18n from '#services/localization';
import { StaticNavigator } from '#services/navigator';

import styles from './NotFound.module.scss';

export const NotFoundPage: React.ComponentType = () => {
  useMount(() => {
    setTimeout(() => {
      StaticNavigator.navigate(Paths.Root);
    }, 3000);
  });

  return (
    <div className={styles.container}>
      <p className={styles.title}>{i18n.t('labels.page_not_exist')}</p>
      <p className={styles.loading}>
        {i18n.t('labels.redirect_to_homepage')}
        <LoadingDots className={styles.loadingDots} />
      </p>
    </div>
  );
};
