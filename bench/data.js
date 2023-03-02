window.BENCHMARK_DATA = {
  "lastUpdate": 1677787001957,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "krzysztofwitt93@wp.pl",
            "name": "Krzysztof",
            "username": "krzysztof-kwitt"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "3ac74478cb5c4c157b2e475445978d5c630f4ba7",
          "message": "feat(druid): implement bitwise operations",
          "timestamp": "2023-03-02T14:51:16-05:00",
          "tree_id": "d90b0ccc106fb6821700a97c8985f9c7cfa1e5f6",
          "url": "https://github.com/ibis-project/ibis/commit/3ac74478cb5c4c157b2e475445978d5c630f4ba7"
        },
        "date": 1677786919099,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5543.1523182640585,
            "unit": "iter/sec",
            "range": "stddev: 0.00005294673069360144",
            "extra": "mean: 180.4027640923944 usec\nrounds: 479"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 38.144151442578156,
            "unit": "iter/sec",
            "range": "stddev: 0.0006882370409960756",
            "extra": "mean: 26.216338866664536 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 143.50795374201638,
            "unit": "iter/sec",
            "range": "stddev: 0.0004997476151376528",
            "extra": "mean: 6.9682548870963315 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 48.85490918596454,
            "unit": "iter/sec",
            "range": "stddev: 0.00019779945687927497",
            "extra": "mean: 20.468772057144438 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 110.84717004068882,
            "unit": "iter/sec",
            "range": "stddev: 0.0001260589791960456",
            "extra": "mean: 9.021430133335192 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.98827485249836,
            "unit": "iter/sec",
            "range": "stddev: 0.0001248159816309131",
            "extra": "mean: 20.004691159091305 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 194.55989533219088,
            "unit": "iter/sec",
            "range": "stddev: 0.00002650936426606305",
            "extra": "mean: 5.139805396649724 msec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 327.8229982781749,
            "unit": "iter/sec",
            "range": "stddev: 0.000027595231508804307",
            "extra": "mean: 3.050426618182071 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1189.8446040209533,
            "unit": "iter/sec",
            "range": "stddev: 0.000012110991252001465",
            "extra": "mean: 840.4458839588013 usec\nrounds: 293"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 134.54060547069292,
            "unit": "iter/sec",
            "range": "stddev: 0.000526355880179678",
            "extra": "mean: 7.432700310077248 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 154.13428566227697,
            "unit": "iter/sec",
            "range": "stddev: 0.00005532501429000668",
            "extra": "mean: 6.487849187500672 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12113589.087359926,
            "unit": "iter/sec",
            "range": "stddev: 3.679034052623466e-9",
            "extra": "mean: 82.55191692462168 nsec\nrounds: 96154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.98872557249261,
            "unit": "iter/sec",
            "range": "stddev: 0.0001249019442386695",
            "extra": "mean: 13.700746137933278 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 141.00088317585804,
            "unit": "iter/sec",
            "range": "stddev: 0.0006066600706674711",
            "extra": "mean: 7.092154158728124 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.18343069848321564,
            "unit": "iter/sec",
            "range": "stddev: 0.008509582760251521",
            "extra": "mean: 5.451650177799996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139282.4494490074,
            "unit": "iter/sec",
            "range": "stddev: 3.187221948321143e-7",
            "extra": "mean: 7.179655469557988 usec\nrounds: 39683"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 41.49068384678641,
            "unit": "iter/sec",
            "range": "stddev: 0.0005562432000666364",
            "extra": "mean: 24.101796048788266 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.64507487170633,
            "unit": "iter/sec",
            "range": "stddev: 0.00008540684871207698",
            "extra": "mean: 10.45532141975268 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6117906.3792324215,
            "unit": "iter/sec",
            "range": "stddev: 8.63703058560905e-9",
            "extra": "mean: 163.45460979828454 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 601.3541079264222,
            "unit": "iter/sec",
            "range": "stddev: 0.004643793818806061",
            "extra": "mean: 1.6629137255720776 msec\nrounds: 481"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 367.14790470054237,
            "unit": "iter/sec",
            "range": "stddev: 0.00003196377510219037",
            "extra": "mean: 2.7236979625844033 msec\nrounds: 294"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13523.893207424942,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017898485668894985",
            "extra": "mean: 73.94320442067495 usec\nrounds: 7284"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.877899067318747,
            "unit": "iter/sec",
            "range": "stddev: 0.00010537841489849735",
            "extra": "mean: 62.980624562495535 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 312.21489906209354,
            "unit": "iter/sec",
            "range": "stddev: 0.00016723922203209794",
            "extra": "mean: 3.20292209950275 msec\nrounds: 201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11505.606183886795,
            "unit": "iter/sec",
            "range": "stddev: 0.000013754272622520629",
            "extra": "mean: 86.91415158989759 usec\nrounds: 6069"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 106.6154948203872,
            "unit": "iter/sec",
            "range": "stddev: 0.0004981037846266584",
            "extra": "mean: 9.379499684212677 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.33458276620776,
            "unit": "iter/sec",
            "range": "stddev: 0.00017733077654973813",
            "extra": "mean: 13.274116126764588 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7073168.938723713,
            "unit": "iter/sec",
            "range": "stddev: 3.753631846812964e-9",
            "extra": "mean: 141.3793461831795 nsec\nrounds: 70922"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8492943082546598,
            "unit": "iter/sec",
            "range": "stddev: 0.0034438423789350603",
            "extra": "mean: 1.1774481358000002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 138.47218621184174,
            "unit": "iter/sec",
            "range": "stddev: 0.0003010375081049351",
            "extra": "mean: 7.221666873014841 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 268.90644220492476,
            "unit": "iter/sec",
            "range": "stddev: 0.0036017833547310777",
            "extra": "mean: 3.7187655000021635 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 302.7466562046858,
            "unit": "iter/sec",
            "range": "stddev: 0.00037149054780071374",
            "extra": "mean: 3.3030918079699747 msec\nrounds: 276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 734.0689240507987,
            "unit": "iter/sec",
            "range": "stddev: 0.000016717629508577413",
            "extra": "mean: 1.362269900327232 msec\nrounds: 612"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5453.144756820681,
            "unit": "iter/sec",
            "range": "stddev: 0.00004820397907356151",
            "extra": "mean: 183.38042443293304 usec\nrounds: 2382"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11972.870916653339,
            "unit": "iter/sec",
            "range": "stddev: 0.000001976392356461065",
            "extra": "mean: 83.52215662904017 usec\nrounds: 5363"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 481986.1950117072,
            "unit": "iter/sec",
            "range": "stddev: 2.9837296167392523e-7",
            "extra": "mean: 2.0747482196574336 usec\nrounds: 2105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 541.6962149052697,
            "unit": "iter/sec",
            "range": "stddev: 0.00003596251385314349",
            "extra": "mean: 1.8460531428577125 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5789.076459497669,
            "unit": "iter/sec",
            "range": "stddev: 0.000042949074435196266",
            "extra": "mean: 172.73912462485808 usec\nrounds: 2327"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 195.97827750642796,
            "unit": "iter/sec",
            "range": "stddev: 0.00005221511178304727",
            "extra": "mean: 5.102606333333044 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 311.5412104917529,
            "unit": "iter/sec",
            "range": "stddev: 0.00017850220663852626",
            "extra": "mean: 3.209848220148942 msec\nrounds: 268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 117.62875794150719,
            "unit": "iter/sec",
            "range": "stddev: 0.00009965393321816884",
            "extra": "mean: 8.501322444442254 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.922818902514252,
            "unit": "iter/sec",
            "range": "stddev: 0.005113135929792754",
            "extra": "mean: 1.0836362338000072 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 182.17589039905775,
            "unit": "iter/sec",
            "range": "stddev: 0.004037326412949679",
            "extra": "mean: 5.489200562212113 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7971.314006836196,
            "unit": "iter/sec",
            "range": "stddev: 0.000013826158227353345",
            "extra": "mean: 125.44983162655494 usec\nrounds: 1758"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 67.97776315036377,
            "unit": "iter/sec",
            "range": "stddev: 0.00024917576131771137",
            "extra": "mean: 14.710692933335343 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 303.82260045563794,
            "unit": "iter/sec",
            "range": "stddev: 0.00018550943308473514",
            "extra": "mean: 3.2913943811300275 msec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 101.94676217097653,
            "unit": "iter/sec",
            "range": "stddev: 0.000575969715596347",
            "extra": "mean: 9.809041294738563 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 59.285909542394926,
            "unit": "iter/sec",
            "range": "stddev: 0.00009456688829339936",
            "extra": "mean: 16.867414326922106 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.441469864165898,
            "unit": "iter/sec",
            "range": "stddev: 0.0012703167219896747",
            "extra": "mean: 95.77195672727096 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.248627001616832,
            "unit": "iter/sec",
            "range": "stddev: 0.00032177717470289015",
            "extra": "mean: 36.699096800020925 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.5924738115972525,
            "unit": "iter/sec",
            "range": "stddev: 0.0001640672813333525",
            "extra": "mean: 178.811744799998 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7929152988540977,
            "unit": "iter/sec",
            "range": "stddev: 0.0006362908728580729",
            "extra": "mean: 557.7508322000085 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.09752644948917,
            "unit": "iter/sec",
            "range": "stddev: 0.00010337547332203168",
            "extra": "mean: 10.09106923077145 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 93.25558268807528,
            "unit": "iter/sec",
            "range": "stddev: 0.0005583644054257434",
            "extra": "mean: 10.723218612496765 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 294.53448730139445,
            "unit": "iter/sec",
            "range": "stddev: 0.0002008371621918583",
            "extra": "mean: 3.3951881464281946 msec\nrounds: 280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5248.116005428637,
            "unit": "iter/sec",
            "range": "stddev: 0.000048548755951283555",
            "extra": "mean: 190.5445685586223 usec\nrounds: 1991"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 141.80778461556002,
            "unit": "iter/sec",
            "range": "stddev: 0.0005476486214049836",
            "extra": "mean: 7.051799044114492 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 735147.8672144283,
            "unit": "iter/sec",
            "range": "stddev: 7.846881880747793e-7",
            "extra": "mean: 1.360270558614461 usec\nrounds: 24272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5785.763881537235,
            "unit": "iter/sec",
            "range": "stddev: 0.00004218265910357963",
            "extra": "mean: 172.83802458497624 usec\nrounds: 3254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5882816.680223465,
            "unit": "iter/sec",
            "range": "stddev: 9.962012974931874e-9",
            "extra": "mean: 169.98659899833274 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 71125.33723547087,
            "unit": "iter/sec",
            "range": "stddev: 7.408131804390576e-7",
            "extra": "mean: 14.059687291033198 usec\nrounds: 598"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6820712064872987,
            "unit": "iter/sec",
            "range": "stddev: 0.005160132998705792",
            "extra": "mean: 1.4661225844000227 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5728.38249336395,
            "unit": "iter/sec",
            "range": "stddev: 0.00004400695693871696",
            "extra": "mean: 174.56934853048847 usec\nrounds: 2347"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 158.47373262117418,
            "unit": "iter/sec",
            "range": "stddev: 0.00004923348866477713",
            "extra": "mean: 6.310194020547647 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 142.37422638072678,
            "unit": "iter/sec",
            "range": "stddev: 0.0005478689074256009",
            "extra": "mean: 7.023743169117371 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 2367326.790442959,
            "unit": "iter/sec",
            "range": "stddev: 1.5307865441759337e-8",
            "extra": "mean: 422.41738826958317 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 127.86543176757473,
            "unit": "iter/sec",
            "range": "stddev: 0.009473512642901664",
            "extra": "mean: 7.820722037037606 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 105.84160454602562,
            "unit": "iter/sec",
            "range": "stddev: 0.0005801030887451565",
            "extra": "mean: 9.448080499999849 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2534194.9128507352,
            "unit": "iter/sec",
            "range": "stddev: 1.5602063370619653e-8",
            "extra": "mean: 394.6026388613577 nsec\nrounds: 94340"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 105.60986039834532,
            "unit": "iter/sec",
            "range": "stddev: 0.0006012062456027863",
            "extra": "mean: 9.468812819448324 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2518398.1992776785,
            "unit": "iter/sec",
            "range": "stddev: 1.6542045752228525e-8",
            "extra": "mean: 397.07779345088005 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5554.272114435751,
            "unit": "iter/sec",
            "range": "stddev: 0.00005752126852323715",
            "extra": "mean: 180.041593101095 usec\nrounds: 2696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 306.0947856239181,
            "unit": "iter/sec",
            "range": "stddev: 0.00019173718348050546",
            "extra": "mean: 3.2669618920873917 msec\nrounds: 278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1743.4095461223162,
            "unit": "iter/sec",
            "range": "stddev: 0.00000478423468004661",
            "extra": "mean: 573.5886913228137 usec\nrounds: 1406"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 278.8367529766705,
            "unit": "iter/sec",
            "range": "stddev: 0.00026287961779061835",
            "extra": "mean: 3.5863278040813626 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 132.37907370183905,
            "unit": "iter/sec",
            "range": "stddev: 0.0004929029347523812",
            "extra": "mean: 7.554064037737014 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.19270562500097,
            "unit": "iter/sec",
            "range": "stddev: 0.0005442768613497889",
            "extra": "mean: 9.882135217391964 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 103.97055221251664,
            "unit": "iter/sec",
            "range": "stddev: 0.000595630143916519",
            "extra": "mean: 9.618108000003618 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5160568786943656,
            "unit": "iter/sec",
            "range": "stddev: 0.00088733706802002",
            "extra": "mean: 397.44729479999705 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 294.26954618092367,
            "unit": "iter/sec",
            "range": "stddev: 0.00019529594100852737",
            "extra": "mean: 3.3982449525550873 msec\nrounds: 274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2517458.6472158604,
            "unit": "iter/sec",
            "range": "stddev: 1.6096642871250086e-8",
            "extra": "mean: 397.2259886396898 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 133.57055562173653,
            "unit": "iter/sec",
            "range": "stddev: 0.00019719023886222321",
            "extra": "mean: 7.486679944881996 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 86.99175050103263,
            "unit": "iter/sec",
            "range": "stddev: 0.015551110340333426",
            "extra": "mean: 11.4953428829798 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9247786571692118,
            "unit": "iter/sec",
            "range": "stddev: 0.0031887790398034267",
            "extra": "mean: 1.0813398343999894 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5420.829181248162,
            "unit": "iter/sec",
            "range": "stddev: 0.0000430016496673794",
            "extra": "mean: 184.4736232344711 usec\nrounds: 2479"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 141.12157536533843,
            "unit": "iter/sec",
            "range": "stddev: 0.0005930158954466434",
            "extra": "mean: 7.086088696297355 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5280.3848407099285,
            "unit": "iter/sec",
            "range": "stddev: 0.00004723151171125802",
            "extra": "mean: 189.38013613900793 usec\nrounds: 1616"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 293.05960958615185,
            "unit": "iter/sec",
            "range": "stddev: 0.00006476472835554321",
            "extra": "mean: 3.412275070632093 msec\nrounds: 269"
          }
        ]
      }
    ]
  }
}