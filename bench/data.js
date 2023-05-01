window.BENCHMARK_DATA = {
  "lastUpdate": 1682976409058,
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
            "email": "gforsyth@users.noreply.github.com",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "distinct": true,
          "id": "c53031c9069ea9f1e121a9ce3f139ba69eee7fdb",
          "message": "feat(api): exact median",
          "timestamp": "2023-05-01T17:19:03-04:00",
          "tree_id": "2e107e2316a071d32e34cafec848d5a97bd87f01",
          "url": "https://github.com/ibis-project/ibis/commit/c53031c9069ea9f1e121a9ce3f139ba69eee7fdb"
        },
        "date": 1682976311549,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 940.1380893856691,
            "unit": "iter/sec",
            "range": "stddev: 0.00024291521913464252",
            "extra": "mean: 1.063673529761407 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 232.66702860635823,
            "unit": "iter/sec",
            "range": "stddev: 0.00040765771063324785",
            "extra": "mean: 4.297987583328222 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 239.78584923293545,
            "unit": "iter/sec",
            "range": "stddev: 0.00037102131677656063",
            "extra": "mean: 4.170387882349841 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 142.83526258217748,
            "unit": "iter/sec",
            "range": "stddev: 0.000184232283142361",
            "extra": "mean: 7.001072297708484 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 93.53345403408458,
            "unit": "iter/sec",
            "range": "stddev: 0.0002464274463279985",
            "extra": "mean: 10.691361826920124 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 175.1858979260586,
            "unit": "iter/sec",
            "range": "stddev: 0.00013812636622891506",
            "extra": "mean: 5.70822201922939 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 35.23153584691052,
            "unit": "iter/sec",
            "range": "stddev: 0.0013559032502176056",
            "extra": "mean: 28.38366185184887 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3887.5297184600863,
            "unit": "iter/sec",
            "range": "stddev: 0.00004152770763388224",
            "extra": "mean: 257.2327602414101 usec\nrounds: 830"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1634485.5070750732,
            "unit": "iter/sec",
            "range": "stddev: 3.212047726604813e-7",
            "extra": "mean: 611.8133172006579 nsec\nrounds: 91744"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1673432.533488026,
            "unit": "iter/sec",
            "range": "stddev: 3.0423562861827396e-7",
            "extra": "mean: 597.5741357888185 nsec\nrounds: 106372"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1740.1320374964453,
            "unit": "iter/sec",
            "range": "stddev: 0.0002961220865381501",
            "extra": "mean: 574.6690357122068 usec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 112.2154089863792,
            "unit": "iter/sec",
            "range": "stddev: 0.00043769159127757875",
            "extra": "mean: 8.911432119998608 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 7.592924199496024,
            "unit": "iter/sec",
            "range": "stddev: 0.0018351010280151755",
            "extra": "mean: 131.7015650000002 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1517.7920832695638,
            "unit": "iter/sec",
            "range": "stddev: 0.00002882567165671544",
            "extra": "mean: 658.8517696349043 usec\nrounds: 1146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9405.657460658767,
            "unit": "iter/sec",
            "range": "stddev: 0.0000066657330598755595",
            "extra": "mean: 106.31898984018078 usec\nrounds: 3937"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 71.82239361393181,
            "unit": "iter/sec",
            "range": "stddev: 0.016343344877269562",
            "extra": "mean: 13.923234101265377 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 86.99879175098725,
            "unit": "iter/sec",
            "range": "stddev: 0.0010118401457524541",
            "extra": "mean: 11.494412507040964 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5249383.244642026,
            "unit": "iter/sec",
            "range": "stddev: 4.233974395484625e-8",
            "extra": "mean: 190.4985697166192 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 243.1006065435953,
            "unit": "iter/sec",
            "range": "stddev: 0.0004129461895023649",
            "extra": "mean: 4.11352326190379 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 89.23587792596236,
            "unit": "iter/sec",
            "range": "stddev: 0.0008737044832459801",
            "extra": "mean: 11.206254964283366 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1843.120639639891,
            "unit": "iter/sec",
            "range": "stddev: 0.00011346424341117527",
            "extra": "mean: 542.5580824678846 usec\nrounds: 1540"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 248.93308217241494,
            "unit": "iter/sec",
            "range": "stddev: 0.00032154271373035007",
            "extra": "mean: 4.017143849556261 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 86.73374874520846,
            "unit": "iter/sec",
            "range": "stddev: 0.0008524900090045909",
            "extra": "mean: 11.52953739999903 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1876.2798368543333,
            "unit": "iter/sec",
            "range": "stddev: 0.00014814573002321478",
            "extra": "mean: 532.9695391688185 usec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.4526751278173082,
            "unit": "iter/sec",
            "range": "stddev: 0.007464920466691782",
            "extra": "mean: 688.3851597999978 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3870907.888708209,
            "unit": "iter/sec",
            "range": "stddev: 5.594693093267126e-8",
            "extra": "mean: 258.337327766889 nsec\nrounds: 131579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 167.58740707178268,
            "unit": "iter/sec",
            "range": "stddev: 0.005487942885318131",
            "extra": "mean: 5.9670354561406285 msec\nrounds: 171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 72.04676577982315,
            "unit": "iter/sec",
            "range": "stddev: 0.02410230215811299",
            "extra": "mean: 13.879873567899311 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 888103.033211042,
            "unit": "iter/sec",
            "range": "stddev: 4.37122468167748e-7",
            "extra": "mean: 1.1259954786826718 usec\nrounds: 106383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1495673.6032337267,
            "unit": "iter/sec",
            "range": "stddev: 3.5075324728505026e-7",
            "extra": "mean: 668.5950717041113 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12259.728309605847,
            "unit": "iter/sec",
            "range": "stddev: 0.000006216188557244532",
            "extra": "mean: 81.56787611814133 usec\nrounds: 5368"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 52.07862733295178,
            "unit": "iter/sec",
            "range": "stddev: 0.0008730498816805604",
            "extra": "mean: 19.201734976744834 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9853315.507510012,
            "unit": "iter/sec",
            "range": "stddev: 1.3915265589948255e-8",
            "extra": "mean: 101.48868157497776 nsec\nrounds: 97078"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 271.55761412885244,
            "unit": "iter/sec",
            "range": "stddev: 0.00020556216592233225",
            "extra": "mean: 3.68245980952501 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 249.7483329484227,
            "unit": "iter/sec",
            "range": "stddev: 0.00028567322022107707",
            "extra": "mean: 4.004030730433412 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 89.96646026638236,
            "unit": "iter/sec",
            "range": "stddev: 0.000970527381350577",
            "extra": "mean: 11.115253362631947 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1865.54804267938,
            "unit": "iter/sec",
            "range": "stddev: 0.00009337445852237777",
            "extra": "mean: 536.0355118830159 usec\nrounds: 1094"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1856.9499945820146,
            "unit": "iter/sec",
            "range": "stddev: 0.00009999472405316513",
            "extra": "mean: 538.5174629999084 usec\nrounds: 1527"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.76007062966337,
            "unit": "iter/sec",
            "range": "stddev: 0.0005970491236086234",
            "extra": "mean: 27.20342977777237 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 152.89161620356455,
            "unit": "iter/sec",
            "range": "stddev: 0.028375905068298044",
            "extra": "mean: 6.540580999997864 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 82.37971217126027,
            "unit": "iter/sec",
            "range": "stddev: 0.0003067390884770019",
            "extra": "mean: 12.138911069767843 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 88.11194307878397,
            "unit": "iter/sec",
            "range": "stddev: 0.0002785413200180652",
            "extra": "mean: 11.349199269228066 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 584.7418154308118,
            "unit": "iter/sec",
            "range": "stddev: 0.000047220623708640065",
            "extra": "mean: 1.710156471815248 msec\nrounds: 479"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2555623428232243,
            "unit": "iter/sec",
            "range": "stddev: 0.005499348670557962",
            "extra": "mean: 443.3484196000222 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5992736.813990389,
            "unit": "iter/sec",
            "range": "stddev: 1.538972789480812e-8",
            "extra": "mean: 166.8686663604621 nsec\nrounds: 58824"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1610352.571945986,
            "unit": "iter/sec",
            "range": "stddev: 3.0935543104415007e-7",
            "extra": "mean: 620.9820243225231 nsec\nrounds: 90901"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 95.07370291958264,
            "unit": "iter/sec",
            "range": "stddev: 0.0001371845697960458",
            "extra": "mean: 10.518155591834288 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 45.6129370696235,
            "unit": "iter/sec",
            "range": "stddev: 0.0004442727721065745",
            "extra": "mean: 21.92360466666731 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 79.28802875916871,
            "unit": "iter/sec",
            "range": "stddev: 0.001123442287412962",
            "extra": "mean: 12.612244441559053 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 161.77858401248642,
            "unit": "iter/sec",
            "range": "stddev: 0.0002732530523995175",
            "extra": "mean: 6.181287876291574 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.1256479835673534,
            "unit": "iter/sec",
            "range": "stddev: 0.07443700823063519",
            "extra": "mean: 888.3771965999927 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 97.4696042858627,
            "unit": "iter/sec",
            "range": "stddev: 0.00014926758173044376",
            "extra": "mean: 10.259608698801737 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 90.32083272739347,
            "unit": "iter/sec",
            "range": "stddev: 0.0008960855740643948",
            "extra": "mean: 11.071642829270653 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.795884822513634,
            "unit": "iter/sec",
            "range": "stddev: 0.009948049052700391",
            "extra": "mean: 1.2564632114000005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 85.32571571345478,
            "unit": "iter/sec",
            "range": "stddev: 0.0009692248169691243",
            "extra": "mean: 11.71979621428845 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 22.123893922785037,
            "unit": "iter/sec",
            "range": "stddev: 0.03581623345320719",
            "extra": "mean: 45.19999975999326 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10574.48077528241,
            "unit": "iter/sec",
            "range": "stddev: 0.000015151082891963604",
            "extra": "mean: 94.56729093852773 usec\nrounds: 3774"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 40.15448546200921,
            "unit": "iter/sec",
            "range": "stddev: 0.0004710913090777123",
            "extra": "mean: 24.903818054053158 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7381.95995032359,
            "unit": "iter/sec",
            "range": "stddev: 0.000015472392583479133",
            "extra": "mean: 135.4653786703577 usec\nrounds: 3338"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4546514.556838042,
            "unit": "iter/sec",
            "range": "stddev: 4.2372818257956916e-8",
            "extra": "mean: 219.9487074106483 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14155722604551582,
            "unit": "iter/sec",
            "range": "stddev: 0.10420225038056667",
            "extra": "mean: 7.064280841999993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 370.37486701238805,
            "unit": "iter/sec",
            "range": "stddev: 0.00007619683483813206",
            "extra": "mean: 2.699967219877672 msec\nrounds: 332"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 16.819603944928758,
            "unit": "iter/sec",
            "range": "stddev: 0.00068085832459065",
            "extra": "mean: 59.454432058818355 msec\nrounds: 17"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 5257519.86870824,
            "unit": "iter/sec",
            "range": "stddev: 1.6943787799841245e-8",
            "extra": "mean: 190.20375100275993 nsec\nrounds: 56177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 150.44539161950462,
            "unit": "iter/sec",
            "range": "stddev: 0.00017177189923400963",
            "extra": "mean: 6.646930086958903 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 91.34943337861938,
            "unit": "iter/sec",
            "range": "stddev: 0.0009081891535136379",
            "extra": "mean: 10.946975400003446 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7954872810940256,
            "unit": "iter/sec",
            "range": "stddev: 0.010617077128909129",
            "extra": "mean: 1.2570911236000029 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 85.26209651766703,
            "unit": "iter/sec",
            "range": "stddev: 0.0009465070604259441",
            "extra": "mean: 11.728541061534788 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 85.9390449439116,
            "unit": "iter/sec",
            "range": "stddev: 0.0010221527434467422",
            "extra": "mean: 11.636154447057834 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 88.91803708155494,
            "unit": "iter/sec",
            "range": "stddev: 0.000933987229390426",
            "extra": "mean: 11.246312141177922 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 178.75699218766664,
            "unit": "iter/sec",
            "range": "stddev: 0.014498529685951915",
            "extra": "mean: 5.594186765853376 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 126.69757806019108,
            "unit": "iter/sec",
            "range": "stddev: 0.004744139411497466",
            "extra": "mean: 7.892810701755666 msec\nrounds: 171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 239.8279152947826,
            "unit": "iter/sec",
            "range": "stddev: 0.0003820499577299478",
            "extra": "mean: 4.16965639204618 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6876050850606812,
            "unit": "iter/sec",
            "range": "stddev: 0.003183053901406936",
            "extra": "mean: 1.4543231598000035 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 43.198904821363854,
            "unit": "iter/sec",
            "range": "stddev: 0.000391416466562194",
            "extra": "mean: 23.148735000000595 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.049881297680162,
            "unit": "iter/sec",
            "range": "stddev: 0.000762366704936877",
            "extra": "mean: 49.87560700001268 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 241.14641424725266,
            "unit": "iter/sec",
            "range": "stddev: 0.00035790556949111876",
            "extra": "mean: 4.1468582608683455 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 83.7512566738998,
            "unit": "iter/sec",
            "range": "stddev: 0.0011269899813803697",
            "extra": "mean: 11.940119345237713 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 143356.9237944451,
            "unit": "iter/sec",
            "range": "stddev: 6.098496169462128e-7",
            "extra": "mean: 6.975596110264392 usec\nrounds: 33113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 84.35983716153426,
            "unit": "iter/sec",
            "range": "stddev: 0.0010621049993947086",
            "extra": "mean: 11.853982103891166 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1856.737469828193,
            "unit": "iter/sec",
            "range": "stddev: 0.00010163967596150574",
            "extra": "mean: 538.579102457889 usec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1868.8764219395455,
            "unit": "iter/sec",
            "range": "stddev: 0.00010698470980343257",
            "extra": "mean: 535.0808583492034 usec\nrounds: 1539"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1843.1798697004967,
            "unit": "iter/sec",
            "range": "stddev: 0.00009875961628179886",
            "extra": "mean: 542.5406475182982 usec\nrounds: 1149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 80.04311258122975,
            "unit": "iter/sec",
            "range": "stddev: 0.0011615404679840907",
            "extra": "mean: 12.49326728749054 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 107.32281450510163,
            "unit": "iter/sec",
            "range": "stddev: 0.00009312135813312338",
            "extra": "mean: 9.317683333327645 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 132.18022653845134,
            "unit": "iter/sec",
            "range": "stddev: 0.0001442506588064868",
            "extra": "mean: 7.565428099104515 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 641.4432404615949,
            "unit": "iter/sec",
            "range": "stddev: 0.000021595874154260434",
            "extra": "mean: 1.5589843916359314 msec\nrounds: 526"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.36881652043311,
            "unit": "iter/sec",
            "range": "stddev: 0.001201776098300037",
            "extra": "mean: 28.27349338709947 msec\nrounds: 31"
          }
        ]
      }
    ]
  }
}