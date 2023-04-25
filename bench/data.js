window.BENCHMARK_DATA = {
  "lastUpdate": 1682383403810,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "8191529bfb854bd80bfd451c4ad360fd346b2e5a",
          "message": "chore(deps): pre-commit.ci autoupdate\n\nupdates:\n- [github.com/adrienverge/yamllint: v1.30.0 → v1.31.0](https://github.com/adrienverge/yamllint/compare/v1.30.0...v1.31.0)",
          "timestamp": "2023-04-24T20:38:06-04:00",
          "tree_id": "32b8617b48774fa1f26f4b50d83782374c3ae604",
          "url": "https://github.com/ibis-project/ibis/commit/8191529bfb854bd80bfd451c4ad360fd346b2e5a"
        },
        "date": 1682383317936,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 97.65277412991111,
            "unit": "iter/sec",
            "range": "stddev: 0.005631753653565431",
            "extra": "mean: 10.240364484368492 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6877428710935933,
            "unit": "iter/sec",
            "range": "stddev: 0.002123678344526324",
            "extra": "mean: 592.507316800004 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 535.0489459813359,
            "unit": "iter/sec",
            "range": "stddev: 0.00005526695119264162",
            "extra": "mean: 1.868987888885371 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6404853.65812366,
            "unit": "iter/sec",
            "range": "stddev: 8.311627803500209e-9",
            "extra": "mean: 156.13159228602356 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 100.69157772573577,
            "unit": "iter/sec",
            "range": "stddev: 0.0005038306821010907",
            "extra": "mean: 9.931317222218972 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 120.67595338021627,
            "unit": "iter/sec",
            "range": "stddev: 0.00009798547896395203",
            "extra": "mean: 8.286655062498482 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 178.30349089128313,
            "unit": "iter/sec",
            "range": "stddev: 0.004062470436637685",
            "extra": "mean: 5.608415152172928 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.463375742944926,
            "unit": "iter/sec",
            "range": "stddev: 0.020817608637456412",
            "extra": "mean: 27.42477841463935 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2430.0368786569575,
            "unit": "iter/sec",
            "range": "stddev: 0.0000757795896212915",
            "extra": "mean: 411.5163884066994 usec\nrounds: 345"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 96.60015882690315,
            "unit": "iter/sec",
            "range": "stddev: 0.0006974002387352032",
            "extra": "mean: 10.351949853331917 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 101.15422043051292,
            "unit": "iter/sec",
            "range": "stddev: 0.0006829426038047299",
            "extra": "mean: 9.885894980397204 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 101.28850685165912,
            "unit": "iter/sec",
            "range": "stddev: 0.00004755174263265759",
            "extra": "mean: 9.872788444443534 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 275.00436512114004,
            "unit": "iter/sec",
            "range": "stddev: 0.0002333491591437176",
            "extra": "mean: 3.636305916669715 msec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 413.875928387853,
            "unit": "iter/sec",
            "range": "stddev: 0.000032908898318379147",
            "extra": "mean: 2.4161830428148896 msec\nrounds: 327"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 102.61916228226409,
            "unit": "iter/sec",
            "range": "stddev: 0.0006070644088371209",
            "extra": "mean: 9.74476869387612 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 277.9734253340863,
            "unit": "iter/sec",
            "range": "stddev: 0.0002361623906187908",
            "extra": "mean: 3.5974661923100593 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.812302159010244,
            "unit": "iter/sec",
            "range": "stddev: 0.0001457667924119635",
            "extra": "mean: 53.15670520000897 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2328.4687957794144,
            "unit": "iter/sec",
            "range": "stddev: 0.00008298582411409078",
            "extra": "mean: 429.46678169473483 usec\nrounds: 1333"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9317548439488091,
            "unit": "iter/sec",
            "range": "stddev: 0.003329015317238393",
            "extra": "mean: 1.0732436825999911 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2331.9738698490314,
            "unit": "iter/sec",
            "range": "stddev: 0.0000798064149810676",
            "extra": "mean: 428.8212715113907 usec\nrounds: 1197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2529023.066165112,
            "unit": "iter/sec",
            "range": "stddev: 2.1358950255887727e-8",
            "extra": "mean: 395.4096004020164 nsec\nrounds: 100001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8091.709523051542,
            "unit": "iter/sec",
            "range": "stddev: 0.000011602829885090506",
            "extra": "mean: 123.58327954695048 usec\nrounds: 3706"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11738.043334570433,
            "unit": "iter/sec",
            "range": "stddev: 0.000012155343682586272",
            "extra": "mean: 85.1930744756103 usec\nrounds: 5438"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9366822629196376,
            "unit": "iter/sec",
            "range": "stddev: 0.0031832256324875186",
            "extra": "mean: 1.0675978820000296 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 96.59367568361726,
            "unit": "iter/sec",
            "range": "stddev: 0.000651561563306483",
            "extra": "mean: 10.35264465217576 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 106.3970072820031,
            "unit": "iter/sec",
            "range": "stddev: 0.000031672500855568036",
            "extra": "mean: 9.398760599999964 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 90.3980098864609,
            "unit": "iter/sec",
            "range": "stddev: 0.011929787686523788",
            "extra": "mean: 11.062190431581305 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7273476.74222288,
            "unit": "iter/sec",
            "range": "stddev: 3.6540638401181642e-9",
            "extra": "mean: 137.48583180241997 nsec\nrounds: 60976"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 106.19972303139785,
            "unit": "iter/sec",
            "range": "stddev: 0.00005129197230257816",
            "extra": "mean: 9.416220414288189 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2401.5207440489767,
            "unit": "iter/sec",
            "range": "stddev: 0.00007590538629902727",
            "extra": "mean: 416.40281578996263 usec\nrounds: 1444"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 268.41042299401033,
            "unit": "iter/sec",
            "range": "stddev: 0.0002843804653189257",
            "extra": "mean: 3.7256377336073694 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 161.65467404877396,
            "unit": "iter/sec",
            "range": "stddev: 0.00007126756652945138",
            "extra": "mean: 6.186025896772295 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5673942.005686313,
            "unit": "iter/sec",
            "range": "stddev: 9.058412182292531e-9",
            "extra": "mean: 176.24431109759954 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 101.44387981500624,
            "unit": "iter/sec",
            "range": "stddev: 0.0006946957110388716",
            "extra": "mean: 9.857667134021362 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 258.0435141425341,
            "unit": "iter/sec",
            "range": "stddev: 0.00020537263293988632",
            "extra": "mean: 3.8753153836202814 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 70.0137940540537,
            "unit": "iter/sec",
            "range": "stddev: 0.00011478494063547255",
            "extra": "mean: 14.28289972727312 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1766.7160332657402,
            "unit": "iter/sec",
            "range": "stddev: 0.000005065011819097243",
            "extra": "mean: 566.021919295949 usec\nrounds: 1363"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 96.00540388683028,
            "unit": "iter/sec",
            "range": "stddev: 0.0007180296073870337",
            "extra": "mean: 10.416080340423179 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.524688023626828,
            "unit": "iter/sec",
            "range": "stddev: 0.0003039761117955364",
            "extra": "mean: 117.30634566665937 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 28.843645684421503,
            "unit": "iter/sec",
            "range": "stddev: 0.00034199295518356056",
            "extra": "mean: 34.669681181810574 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1878520.412578548,
            "unit": "iter/sec",
            "range": "stddev: 8.065090244230989e-8",
            "extra": "mean: 532.3338481200486 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 100.14132504101062,
            "unit": "iter/sec",
            "range": "stddev: 0.0006304629567172628",
            "extra": "mean: 9.985887440479468 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 71221.96511739302,
            "unit": "iter/sec",
            "range": "stddev: 4.5680711328452237e-7",
            "extra": "mean: 14.040612307617886 usec\nrounds: 13699"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 273.725570411935,
            "unit": "iter/sec",
            "range": "stddev: 0.00022715842189297526",
            "extra": "mean: 3.653294058333974 msec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1170.618347854542,
            "unit": "iter/sec",
            "range": "stddev: 0.000012015704922518616",
            "extra": "mean: 854.2493818183837 usec\nrounds: 275"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 488000.5410093769,
            "unit": "iter/sec",
            "range": "stddev: 2.9575434564993153e-7",
            "extra": "mean: 2.0491780560972477 usec\nrounds: 2005"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 141093.37076541406,
            "unit": "iter/sec",
            "range": "stddev: 2.889820142632399e-7",
            "extra": "mean: 7.087505207190982 usec\nrounds: 42919"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 717046.0899611487,
            "unit": "iter/sec",
            "range": "stddev: 1.2550762486899852e-7",
            "extra": "mean: 1.3946104915713056 usec\nrounds: 22780"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8056721127891286,
            "unit": "iter/sec",
            "range": "stddev: 0.0022444502263452774",
            "extra": "mean: 1.2411997189999966 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5563803382114663,
            "unit": "iter/sec",
            "range": "stddev: 0.001375796995180372",
            "extra": "mean: 391.17809860000534 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 26.360105227045104,
            "unit": "iter/sec",
            "range": "stddev: 0.024793098319203052",
            "extra": "mean: 37.93611563333267 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 125.37914060971643,
            "unit": "iter/sec",
            "range": "stddev: 0.000050834202040644335",
            "extra": "mean: 7.975808377191123 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 43.525768847849214,
            "unit": "iter/sec",
            "range": "stddev: 0.0007176299553450935",
            "extra": "mean: 22.97489571053066 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 101.09655867872948,
            "unit": "iter/sec",
            "range": "stddev: 0.0007246550117323162",
            "extra": "mean: 9.891533530610651 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4675.011184059102,
            "unit": "iter/sec",
            "range": "stddev: 0.00003430161800382717",
            "extra": "mean: 213.9032315922173 usec\nrounds: 2336"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 159.64225993302733,
            "unit": "iter/sec",
            "range": "stddev: 0.00003482849813670739",
            "extra": "mean: 6.264005535999786 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 735.4850468540837,
            "unit": "iter/sec",
            "range": "stddev: 0.000015203569001018254",
            "extra": "mean: 1.3596469490132197 msec\nrounds: 608"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2356.62863432524,
            "unit": "iter/sec",
            "range": "stddev: 0.0000794569309326159",
            "extra": "mean: 424.3349951004581 usec\nrounds: 1429"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1637385.0925191278,
            "unit": "iter/sec",
            "range": "stddev: 1.0523819174163974e-7",
            "extra": "mean: 610.729879347743 nsec\nrounds: 136987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 13003778.176211257,
            "unit": "iter/sec",
            "range": "stddev: 2.7282433245622485e-9",
            "extra": "mean: 76.90072734618101 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9715.623827211104,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015394097688935407",
            "extra": "mean: 102.92699859367164 usec\nrounds: 4976"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3445206067085116,
            "unit": "iter/sec",
            "range": "stddev: 0.00044959199680070827",
            "extra": "mean: 743.759519199989 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 190.42046085258187,
            "unit": "iter/sec",
            "range": "stddev: 0.00005136310185693177",
            "extra": "mean: 5.251536497299898 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 278.50816139178215,
            "unit": "iter/sec",
            "range": "stddev: 0.00022778000769647694",
            "extra": "mean: 3.5905590522113386 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1806444734064245,
            "unit": "iter/sec",
            "range": "stddev: 0.0656091023287022",
            "extra": "mean: 5.535735365399978 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 263.3112789704372,
            "unit": "iter/sec",
            "range": "stddev: 0.0038208993904803685",
            "extra": "mean: 3.7977864218732282 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 281.2408548014017,
            "unit": "iter/sec",
            "range": "stddev: 0.0002398997550320112",
            "extra": "mean: 3.5556711726898644 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2361.714122129141,
            "unit": "iter/sec",
            "range": "stddev: 0.00007843884626910972",
            "extra": "mean: 423.42127297713597 usec\nrounds: 1458"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 268.8592951263196,
            "unit": "iter/sec",
            "range": "stddev: 0.00022720159947028692",
            "extra": "mean: 3.719417621511522 msec\nrounds: 251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2404.5305114696084,
            "unit": "iter/sec",
            "range": "stddev: 0.00008168800209746454",
            "extra": "mean: 415.8816015143085 usec\nrounds: 1320"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 56.324708953122524,
            "unit": "iter/sec",
            "range": "stddev: 0.00014510810261752672",
            "extra": "mean: 17.754197377784447 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13654.77737665725,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016212537744360876",
            "extra": "mean: 73.2344418671734 usec\nrounds: 6984"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 100.67061393907548,
            "unit": "iter/sec",
            "range": "stddev: 0.0005912582360380592",
            "extra": "mean: 9.933385333332593 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.26521114307164,
            "unit": "iter/sec",
            "range": "stddev: 0.0000639657814193141",
            "extra": "mean: 9.069043532710213 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2303.9133525698458,
            "unit": "iter/sec",
            "range": "stddev: 0.0000837858523241061",
            "extra": "mean: 434.04410104424005 usec\nrounds: 1435"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 92.05599987404658,
            "unit": "iter/sec",
            "range": "stddev: 0.0006005028014910938",
            "extra": "mean: 10.862953000002456 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 60.01034750920499,
            "unit": "iter/sec",
            "range": "stddev: 0.00008578787325003454",
            "extra": "mean: 16.663792854167525 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.72790265938353,
            "unit": "iter/sec",
            "range": "stddev: 0.0006886088307766193",
            "extra": "mean: 9.927735747477541 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 50.572737427457575,
            "unit": "iter/sec",
            "range": "stddev: 0.0001462891567123453",
            "extra": "mean: 19.77349953489106 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 47.63531669142807,
            "unit": "iter/sec",
            "range": "stddev: 0.00037204462008408773",
            "extra": "mean: 20.992827789469676 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 424.5883384107431,
            "unit": "iter/sec",
            "range": "stddev: 0.00006531935324770537",
            "extra": "mean: 2.3552224814818357 msec\nrounds: 378"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2454363.3333757897,
            "unit": "iter/sec",
            "range": "stddev: 5.494956502645678e-8",
            "extra": "mean: 407.43763826731595 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 105.31322890308059,
            "unit": "iter/sec",
            "range": "stddev: 0.0005795955111664913",
            "extra": "mean: 9.495483240004887 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 101.01237108608754,
            "unit": "iter/sec",
            "range": "stddev: 0.0007538606956637579",
            "extra": "mean: 9.899777514852637 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 173.01329994705515,
            "unit": "iter/sec",
            "range": "stddev: 0.000049165512048535064",
            "extra": "mean: 5.7799024716944665 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 196.56885973140072,
            "unit": "iter/sec",
            "range": "stddev: 0.0000326523005553077",
            "extra": "mean: 5.0872757839997576 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 114.99932939797694,
            "unit": "iter/sec",
            "range": "stddev: 0.012873339246418591",
            "extra": "mean: 8.695702881356036 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 681.5361006773142,
            "unit": "iter/sec",
            "range": "stddev: 0.000019804199928392583",
            "extra": "mean: 1.4672737056866023 msec\nrounds: 598"
          }
        ]
      }
    ]
  }
}