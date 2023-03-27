window.BENCHMARK_DATA = {
  "lastUpdate": 1679931510129,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "2f63ce1f240047a407aed441afe23ebcb73eef40",
          "message": "build: add `pyarrow` extra",
          "timestamp": "2023-03-27T11:29:04-04:00",
          "tree_id": "a27f3ef63146287a2fc5b40c1f50089b50a22b5d",
          "url": "https://github.com/ibis-project/ibis/commit/2f63ce1f240047a407aed441afe23ebcb73eef40"
        },
        "date": 1679931432539,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 165.21931589158558,
            "unit": "iter/sec",
            "range": "stddev: 0.00006268733318338598",
            "extra": "mean: 6.052561073768063 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.17240152198485,
            "unit": "iter/sec",
            "range": "stddev: 0.00006233449534997358",
            "extra": "mean: 13.30275446511498 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 550.5631267905561,
            "unit": "iter/sec",
            "range": "stddev: 0.000019297612004021424",
            "extra": "mean: 1.816322146071394 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5072.349161213725,
            "unit": "iter/sec",
            "range": "stddev: 0.00012382154308859404",
            "extra": "mean: 197.14731147583643 usec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5593889.700767106,
            "unit": "iter/sec",
            "range": "stddev: 1.319677082253382e-8",
            "extra": "mean: 178.7664851279916 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5526.251616132532,
            "unit": "iter/sec",
            "range": "stddev: 0.000022591817936158895",
            "extra": "mean: 180.95448225353078 usec\nrounds: 1437"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 119.9736030651305,
            "unit": "iter/sec",
            "range": "stddev: 0.0006593781376163315",
            "extra": "mean: 8.335166857138786 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.86572693457602,
            "unit": "iter/sec",
            "range": "stddev: 0.025345891262803535",
            "extra": "mean: 27.125465388886976 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6185333.341604349,
            "unit": "iter/sec",
            "range": "stddev: 1.0355604440368975e-8",
            "extra": "mean: 161.67277408844132 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5243.810538310546,
            "unit": "iter/sec",
            "range": "stddev: 0.0001901029013035758",
            "extra": "mean: 190.70101650205325 usec\nrounds: 606"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.86223793848369,
            "unit": "iter/sec",
            "range": "stddev: 0.03347390039240257",
            "extra": "mean: 27.88448400000442 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 103.38533859750906,
            "unit": "iter/sec",
            "range": "stddev: 0.0006003991802358455",
            "extra": "mean: 9.672551384612804 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11157112.15981254,
            "unit": "iter/sec",
            "range": "stddev: 3.808639799334067e-9",
            "extra": "mean: 89.6289277796018 nsec\nrounds: 104167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5705.316148758534,
            "unit": "iter/sec",
            "range": "stddev: 0.00006014281768470823",
            "extra": "mean: 175.275124800507 usec\nrounds: 1883"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 302.750883046185,
            "unit": "iter/sec",
            "range": "stddev: 0.00024223322741606282",
            "extra": "mean: 3.3030456920168545 msec\nrounds: 263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 36.42566559532489,
            "unit": "iter/sec",
            "range": "stddev: 0.0012607069967799395",
            "extra": "mean: 27.453170275860288 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 488012.9719384837,
            "unit": "iter/sec",
            "range": "stddev: 2.8898915931321845e-7",
            "extra": "mean: 2.0491258583307794 usec\nrounds: 2328"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 153.26373030876428,
            "unit": "iter/sec",
            "range": "stddev: 0.01619573881805953",
            "extra": "mean: 6.524700905983467 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5514934498417023,
            "unit": "iter/sec",
            "range": "stddev: 0.0014254548413066236",
            "extra": "mean: 391.9273240000052 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 119.13417515863367,
            "unit": "iter/sec",
            "range": "stddev: 0.0007373023694095451",
            "extra": "mean: 8.393897038095453 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 112.3791691311812,
            "unit": "iter/sec",
            "range": "stddev: 0.0007190524005337818",
            "extra": "mean: 8.898446284406063 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 61.21807679009137,
            "unit": "iter/sec",
            "range": "stddev: 0.0006158115733422081",
            "extra": "mean: 16.33504435999953 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 108.20678157980926,
            "unit": "iter/sec",
            "range": "stddev: 0.0006958379789334933",
            "extra": "mean: 9.241564949997496 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 55.12915597344832,
            "unit": "iter/sec",
            "range": "stddev: 0.0005983250985038928",
            "extra": "mean: 18.13922202040653 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 139.546953904321,
            "unit": "iter/sec",
            "range": "stddev: 0.00008602634796841041",
            "extra": "mean: 7.166046782258252 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 95.54432735656722,
            "unit": "iter/sec",
            "range": "stddev: 0.020496044352682968",
            "extra": "mean: 10.466346120874807 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1994251.679484904,
            "unit": "iter/sec",
            "range": "stddev: 1.0053949395842728e-7",
            "extra": "mean: 501.4412224330132 nsec\nrounds: 129871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.540864672576301,
            "unit": "iter/sec",
            "range": "stddev: 0.000595723288193062",
            "extra": "mean: 64.34648399999381 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5756.6522990629865,
            "unit": "iter/sec",
            "range": "stddev: 0.00004818526077711064",
            "extra": "mean: 173.71207223385207 usec\nrounds: 2395"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 86.68840634392876,
            "unit": "iter/sec",
            "range": "stddev: 0.0005116913961386145",
            "extra": "mean: 11.535567928571513 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1167.4040241412574,
            "unit": "iter/sec",
            "range": "stddev: 0.0000131871232724302",
            "extra": "mean: 856.6014672902983 usec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12299.482321188883,
            "unit": "iter/sec",
            "range": "stddev: 0.00001143268187037678",
            "extra": "mean: 81.30423491704639 usec\nrounds: 3746"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 120.05299227541214,
            "unit": "iter/sec",
            "range": "stddev: 0.0007288287023464092",
            "extra": "mean: 8.32965493859505 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8506.197788052981,
            "unit": "iter/sec",
            "range": "stddev: 0.00003288710308942264",
            "extra": "mean: 117.56133879281617 usec\nrounds: 4274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5257.479960325991,
            "unit": "iter/sec",
            "range": "stddev: 0.00005094976512051063",
            "extra": "mean: 190.2051947979265 usec\nrounds: 2038"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.04137453864051,
            "unit": "iter/sec",
            "range": "stddev: 0.00042991049550546693",
            "extra": "mean: 21.257882232556458 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5214.982390437932,
            "unit": "iter/sec",
            "range": "stddev: 0.000052265833677716076",
            "extra": "mean: 191.75520167308258 usec\nrounds: 2152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 149742.1164469053,
            "unit": "iter/sec",
            "range": "stddev: 4.91740531282731e-7",
            "extra": "mean: 6.6781478967179835 usec\nrounds: 31948"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2010290.8273861117,
            "unit": "iter/sec",
            "range": "stddev: 9.690914979443205e-8",
            "extra": "mean: 497.4404630300451 nsec\nrounds: 86207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 108.04453668486079,
            "unit": "iter/sec",
            "range": "stddev: 0.0006839193052194781",
            "extra": "mean: 9.255442530303526 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 317.7537072479877,
            "unit": "iter/sec",
            "range": "stddev: 0.00019151395858188944",
            "extra": "mean: 3.147091527777393 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 64.0322805443499,
            "unit": "iter/sec",
            "range": "stddev: 0.00019719180508501492",
            "extra": "mean: 15.617122980765648 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 780832.7650377105,
            "unit": "iter/sec",
            "range": "stddev: 2.871776414727837e-7",
            "extra": "mean: 1.2806839630400304 usec\nrounds: 22124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1733362.438961381,
            "unit": "iter/sec",
            "range": "stddev: 1.324135047795048e-7",
            "extra": "mean: 576.913389561616 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 120.09907200324811,
            "unit": "iter/sec",
            "range": "stddev: 0.0007330294984445222",
            "extra": "mean: 8.326459008550497 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 312.12254127717364,
            "unit": "iter/sec",
            "range": "stddev: 0.00025007336031970416",
            "extra": "mean: 3.203869851591307 msec\nrounds: 283"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 300.40775209598553,
            "unit": "iter/sec",
            "range": "stddev: 0.00023845524811178496",
            "extra": "mean: 3.3288089039742306 msec\nrounds: 302"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.312578501281406,
            "unit": "iter/sec",
            "range": "stddev: 0.00041225666627196946",
            "extra": "mean: 96.9689588181795 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 681.0751051477644,
            "unit": "iter/sec",
            "range": "stddev: 0.000031294647408498903",
            "extra": "mean: 1.4682668511030694 msec\nrounds: 544"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 304.03311806682376,
            "unit": "iter/sec",
            "range": "stddev: 0.00026488210312657643",
            "extra": "mean: 3.289115364663033 msec\nrounds: 266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 75686.60671332694,
            "unit": "iter/sec",
            "range": "stddev: 8.488477814925816e-7",
            "extra": "mean: 13.212377241162793 usec\nrounds: 13832"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 231.43625823093555,
            "unit": "iter/sec",
            "range": "stddev: 0.003611416398972894",
            "extra": "mean: 4.320844139305794 msec\nrounds: 201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 92.60994894719902,
            "unit": "iter/sec",
            "range": "stddev: 0.0007456409759812061",
            "extra": "mean: 10.797975934207065 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 162.16706908365896,
            "unit": "iter/sec",
            "range": "stddev: 0.00015096144228831968",
            "extra": "mean: 6.166480072992617 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 114.21513823016433,
            "unit": "iter/sec",
            "range": "stddev: 0.0006851935905326994",
            "extra": "mean: 8.755406818182172 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8323932532262056,
            "unit": "iter/sec",
            "range": "stddev: 0.0022433566419342538",
            "extra": "mean: 1.201355244199999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.099287386725585,
            "unit": "iter/sec",
            "range": "stddev: 0.001151671412660883",
            "extra": "mean: 41.49500289999537 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 317.57841666391647,
            "unit": "iter/sec",
            "range": "stddev: 0.00020091158485704475",
            "extra": "mean: 3.148828596429049 msec\nrounds: 280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 160.4098314007122,
            "unit": "iter/sec",
            "range": "stddev: 0.0038341025448897325",
            "extra": "mean: 6.234031862435834 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 315.9374296434053,
            "unit": "iter/sec",
            "range": "stddev: 0.00021632070419687485",
            "extra": "mean: 3.1651836920009373 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.1276287387721,
            "unit": "iter/sec",
            "range": "stddev: 0.0001238265671647799",
            "extra": "mean: 8.998662271024441 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.573541870598173,
            "unit": "iter/sec",
            "range": "stddev: 0.00030071465401686285",
            "extra": "mean: 179.41912399999183 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7051957.537024241,
            "unit": "iter/sec",
            "range": "stddev: 7.51588445255532e-8",
            "extra": "mean: 141.80459748228185 nsec\nrounds: 68494"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 102.28506528423064,
            "unit": "iter/sec",
            "range": "stddev: 0.0007676645833741956",
            "extra": "mean: 9.776598345234381 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13774.576274671665,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016090421816347171",
            "extra": "mean: 72.59751443961105 usec\nrounds: 2978"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 288.7527257899473,
            "unit": "iter/sec",
            "range": "stddev: 0.000149170909142459",
            "extra": "mean: 3.4631707709919537 msec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7349624689674632,
            "unit": "iter/sec",
            "range": "stddev: 0.0026894856635870795",
            "extra": "mean: 576.38134419999 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 289.6755652104912,
            "unit": "iter/sec",
            "range": "stddev: 0.00003746778510812297",
            "extra": "mean: 3.452137909089279 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1989522.285937011,
            "unit": "iter/sec",
            "range": "stddev: 1.0960119311242373e-7",
            "extra": "mean: 502.6332235977076 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8801735986245287,
            "unit": "iter/sec",
            "range": "stddev: 0.006007462289783777",
            "extra": "mean: 1.1361395087999995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 283.9332183684454,
            "unit": "iter/sec",
            "range": "stddev: 0.00032954930080647917",
            "extra": "mean: 3.5219549362567073 msec\nrounds: 251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5610.982318455379,
            "unit": "iter/sec",
            "range": "stddev: 0.00005184760222498925",
            "extra": "mean: 178.22191253585794 usec\nrounds: 3430"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16424123667858373,
            "unit": "iter/sec",
            "range": "stddev: 0.18587119330896143",
            "extra": "mean: 6.088604909599996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8696145845794657,
            "unit": "iter/sec",
            "range": "stddev: 0.044875994587237435",
            "extra": "mean: 1.1499347156 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6712868065260451,
            "unit": "iter/sec",
            "range": "stddev: 0.07706414150171682",
            "extra": "mean: 1.4896762311999965 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 120.09461952033362,
            "unit": "iter/sec",
            "range": "stddev: 0.00007060527881485669",
            "extra": "mean: 8.3267677102777 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5451.753722136026,
            "unit": "iter/sec",
            "range": "stddev: 0.000047597662957749264",
            "extra": "mean: 183.42721461163043 usec\nrounds: 1971"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 101.87792442875504,
            "unit": "iter/sec",
            "range": "stddev: 0.00015156719851498634",
            "extra": "mean: 9.815669151164508 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 120.58019037114272,
            "unit": "iter/sec",
            "range": "stddev: 0.000618963696652825",
            "extra": "mean: 8.2932362017511 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 160.7788234634286,
            "unit": "iter/sec",
            "range": "stddev: 0.00006951279530305897",
            "extra": "mean: 6.219724578513687 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 336.84050116449043,
            "unit": "iter/sec",
            "range": "stddev: 0.00001066933580255225",
            "extra": "mean: 2.968764137753336 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 731.1007623169769,
            "unit": "iter/sec",
            "range": "stddev: 0.00009023868654666656",
            "extra": "mean: 1.367800516075018 msec\nrounds: 591"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12629.487015749883,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023958318004262686",
            "extra": "mean: 79.17977972921051 usec\nrounds: 4953"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 97.10185394904221,
            "unit": "iter/sec",
            "range": "stddev: 0.0000573575645015807",
            "extra": "mean: 10.298464543476038 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 105.86743072869183,
            "unit": "iter/sec",
            "range": "stddev: 0.0006503612335729033",
            "extra": "mean: 9.445775656563502 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 85.63755734149989,
            "unit": "iter/sec",
            "range": "stddev: 0.019604967526117647",
            "extra": "mean: 11.677119607840575 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1735.2924039951547,
            "unit": "iter/sec",
            "range": "stddev: 0.000008605515131810241",
            "extra": "mean: 576.2717555252966 usec\nrounds: 1448"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 107.17185353374256,
            "unit": "iter/sec",
            "range": "stddev: 0.0007104534860204966",
            "extra": "mean: 9.330808108914106 msec\nrounds: 101"
          }
        ]
      }
    ]
  }
}