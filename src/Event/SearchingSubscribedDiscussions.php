<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Flarum\Subscriptions\Event;

use Illuminate\Database\Query\Builder;
use Flarum\Search\AbstractSearch;

class SearchingSubscribedDiscussions
{
    /**
     * @var Builder
     */
    public $query;

    /**
     * @var Searching
     */
    public $searching;

    public function __construct(Builder $query, AbstractSearch $search)
    {
        $this->query = $query;
        $this->search = $search;
    }
}
