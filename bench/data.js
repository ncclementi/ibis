window.BENCHMARK_DATA = {
  "lastUpdate": 1681985528205,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "06d0baa3c90e7bf81194265b9b456344425d0c6e",
          "message": "chore(deps): update trinodb/trino docker tag to v414",
          "timestamp": "2023-04-20T06:06:35-04:00",
          "tree_id": "9885f03b7e44e99ea9a04d52fef4595f18787b02",
          "url": "https://github.com/ibis-project/ibis/commit/06d0baa3c90e7bf81194265b9b456344425d0c6e"
        },
        "date": 1681985442954,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 89.8125220056709,
            "unit": "iter/sec",
            "range": "stddev: 0.0067486985416951775",
            "extra": "mean: 11.134304857142954 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 700.5027675876012,
            "unit": "iter/sec",
            "range": "stddev: 0.000018771710487091456",
            "extra": "mean: 1.4275461086953454 msec\nrounds: 322"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 724513.4110695234,
            "unit": "iter/sec",
            "range": "stddev: 2.2312273601632407e-7",
            "extra": "mean: 1.3802367005516218 usec\nrounds: 22125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6282810.132876008,
            "unit": "iter/sec",
            "range": "stddev: 9.245154066135509e-9",
            "extra": "mean: 159.16444693540333 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 84.41240339446597,
            "unit": "iter/sec",
            "range": "stddev: 0.010034755429472861",
            "extra": "mean: 11.846600259998752 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.645545951291446,
            "unit": "iter/sec",
            "range": "stddev: 0.018875313750744704",
            "extra": "mean: 27.28844594999842 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2355.5195466395717,
            "unit": "iter/sec",
            "range": "stddev: 0.00008553767857445343",
            "extra": "mean: 424.53479166692495 usec\nrounds: 1248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 141686.07500083162,
            "unit": "iter/sec",
            "range": "stddev: 3.875761582854649e-7",
            "extra": "mean: 7.05785660301572 usec\nrounds: 35461"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1604231.9485292179,
            "unit": "iter/sec",
            "range": "stddev: 1.1136057597499451e-7",
            "extra": "mean: 623.3512559806666 nsec\nrounds: 140846"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 278.23290132751606,
            "unit": "iter/sec",
            "range": "stddev: 0.00037354847789406224",
            "extra": "mean: 3.5941112471916856 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5682689205786593,
            "unit": "iter/sec",
            "range": "stddev: 0.001401917297520112",
            "extra": "mean: 389.3673251999985 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 97.18857804929527,
            "unit": "iter/sec",
            "range": "stddev: 0.0007628769968414672",
            "extra": "mean: 10.289274934064654 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 96.01856922314192,
            "unit": "iter/sec",
            "range": "stddev: 0.0007497508183412988",
            "extra": "mean: 10.414652166666372 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5728684.551248508,
            "unit": "iter/sec",
            "range": "stddev: 1.0710822446913178e-8",
            "extra": "mean: 174.5601439652895 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 156.82855738167245,
            "unit": "iter/sec",
            "range": "stddev: 0.0074809855442817845",
            "extra": "mean: 6.376389713043829 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6417302.745103021,
            "unit": "iter/sec",
            "range": "stddev: 5.590431451578709e-9",
            "extra": "mean: 155.8287086835131 nsec\nrounds: 63292"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 193.83728444192636,
            "unit": "iter/sec",
            "range": "stddev: 0.00007806945758462328",
            "extra": "mean: 5.158966206522564 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1860581.4420659326,
            "unit": "iter/sec",
            "range": "stddev: 9.062289519296148e-8",
            "extra": "mean: 537.4663948543047 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 277.75889771489545,
            "unit": "iter/sec",
            "range": "stddev: 0.0002583422862208945",
            "extra": "mean: 3.600244702246932 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.50641678155793,
            "unit": "iter/sec",
            "range": "stddev: 0.0004509483473996318",
            "extra": "mean: 23.525859757575837 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 96.05518495249754,
            "unit": "iter/sec",
            "range": "stddev: 0.0007242039614467988",
            "extra": "mean: 10.410682156247297 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 226.67378274226218,
            "unit": "iter/sec",
            "range": "stddev: 0.008632324106461912",
            "extra": "mean: 4.411626205298929 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2325.5781544052466,
            "unit": "iter/sec",
            "range": "stddev: 0.00008205769840214748",
            "extra": "mean: 430.00059925130506 usec\nrounds: 1335"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 68197.50740212065,
            "unit": "iter/sec",
            "range": "stddev: 0.000005379216160372649",
            "extra": "mean: 14.663292517475561 usec\nrounds: 13124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2402.6815272823465,
            "unit": "iter/sec",
            "range": "stddev: 0.00008115098245479099",
            "extra": "mean: 416.2016433077137 usec\nrounds: 1427"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2395.6746910993184,
            "unit": "iter/sec",
            "range": "stddev: 0.00008200631751770229",
            "extra": "mean: 417.41894411428774 usec\nrounds: 1682"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1775.1667992412727,
            "unit": "iter/sec",
            "range": "stddev: 0.000008440266350185758",
            "extra": "mean: 563.3273450288794 usec\nrounds: 342"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1867580.870672848,
            "unit": "iter/sec",
            "range": "stddev: 1.1373663564448428e-7",
            "extra": "mean: 535.4520469251337 nsec\nrounds: 140846"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 88.47733241589522,
            "unit": "iter/sec",
            "range": "stddev: 0.010993803606496011",
            "extra": "mean: 11.302329904109394 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9416629372953573,
            "unit": "iter/sec",
            "range": "stddev: 0.0035996056976132637",
            "extra": "mean: 1.0619511083999953 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 154.3478127323697,
            "unit": "iter/sec",
            "range": "stddev: 0.00007232245301748641",
            "extra": "mean: 6.478873800006113 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 105.89672427205454,
            "unit": "iter/sec",
            "range": "stddev: 0.00013970047525211813",
            "extra": "mean: 9.44316273118085 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 73.99368394184425,
            "unit": "iter/sec",
            "range": "stddev: 0.00012458232789115345",
            "extra": "mean: 13.51466701922769 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 53.96077800414963,
            "unit": "iter/sec",
            "range": "stddev: 0.00015078144189356195",
            "extra": "mean: 18.531978911110198 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 100.87765242367948,
            "unit": "iter/sec",
            "range": "stddev: 0.000765559507245379",
            "extra": "mean: 9.91299832989834 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.65515841098929,
            "unit": "iter/sec",
            "range": "stddev: 0.01951525157117496",
            "extra": "mean: 26.55678643243099 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2321.437768699854,
            "unit": "iter/sec",
            "range": "stddev: 0.0000976773344109216",
            "extra": "mean: 430.7675241107413 usec\nrounds: 1265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 97.03300350648867,
            "unit": "iter/sec",
            "range": "stddev: 0.0007065935733187735",
            "extra": "mean: 10.305771890624094 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 11.288303676636204,
            "unit": "iter/sec",
            "range": "stddev: 0.0008847772560355754",
            "extra": "mean: 88.58726949999891 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7676.034763973573,
            "unit": "iter/sec",
            "range": "stddev: 0.000014589349891684311",
            "extra": "mean: 130.27559550581563 usec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 76.53484631074772,
            "unit": "iter/sec",
            "range": "stddev: 0.017406554832126938",
            "extra": "mean: 13.065943791665665 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9382057401710419,
            "unit": "iter/sec",
            "range": "stddev: 0.004276038005347613",
            "extra": "mean: 1.065864295199998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 251.926372208445,
            "unit": "iter/sec",
            "range": "stddev: 0.0004315166292134273",
            "extra": "mean: 3.9694137268510956 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 262.8889481525845,
            "unit": "iter/sec",
            "range": "stddev: 0.00029299280068137006",
            "extra": "mean: 3.803887561753208 msec\nrounds: 251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 542.8122295367922,
            "unit": "iter/sec",
            "range": "stddev: 0.00007128369054761074",
            "extra": "mean: 1.8422576824647965 msec\nrounds: 422"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2517463.107270464,
            "unit": "iter/sec",
            "range": "stddev: 2.680325427272368e-8",
            "extra": "mean: 397.22528489577854 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 304.7022679428702,
            "unit": "iter/sec",
            "range": "stddev: 0.00006633386543327114",
            "extra": "mean: 3.2818922115390814 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2363.516630940895,
            "unit": "iter/sec",
            "range": "stddev: 0.00007956449534519752",
            "extra": "mean: 423.0983556066236 usec\nrounds: 1302"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 97.88246704724105,
            "unit": "iter/sec",
            "range": "stddev: 0.00014109572814714598",
            "extra": "mean: 10.216334244184607 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 160.4974935272077,
            "unit": "iter/sec",
            "range": "stddev: 0.00005458934873215907",
            "extra": "mean: 6.2306268965532405 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.00517550302379,
            "unit": "iter/sec",
            "range": "stddev: 0.00006350841264623019",
            "extra": "mean: 8.402995884616725 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 758.1933455383444,
            "unit": "iter/sec",
            "range": "stddev: 0.000014596252779805704",
            "extra": "mean: 1.3189247912614748 msec\nrounds: 618"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 94.78433239819132,
            "unit": "iter/sec",
            "range": "stddev: 0.0006777460132157539",
            "extra": "mean: 10.550266849999801 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 243.26871063517407,
            "unit": "iter/sec",
            "range": "stddev: 0.004019358697996439",
            "extra": "mean: 4.110680725807286 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 371.6267668718319,
            "unit": "iter/sec",
            "range": "stddev: 0.00004161949412831817",
            "extra": "mean: 2.6908718347106677 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 97.82666939173167,
            "unit": "iter/sec",
            "range": "stddev: 0.00076648604598956",
            "extra": "mean: 10.222161361700413 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 98.64530195442677,
            "unit": "iter/sec",
            "range": "stddev: 0.0009068788243783665",
            "extra": "mean: 10.13733021428624 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 53.26250947851657,
            "unit": "iter/sec",
            "range": "stddev: 0.00017119105834843663",
            "extra": "mean: 18.774932119999903 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9607.81468877117,
            "unit": "iter/sec",
            "range": "stddev: 0.000002738282895214896",
            "extra": "mean: 104.08194083600699 usec\nrounds: 2248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2266.5202249558774,
            "unit": "iter/sec",
            "range": "stddev: 0.0001012849063615775",
            "extra": "mean: 441.2049753579706 usec\nrounds: 1258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 57.24127642508771,
            "unit": "iter/sec",
            "range": "stddev: 0.0005315333015994511",
            "extra": "mean: 17.46991091836869 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 100.25958413539666,
            "unit": "iter/sec",
            "range": "stddev: 0.0008349582440972462",
            "extra": "mean: 9.974108795918593 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 264.93406039807616,
            "unit": "iter/sec",
            "range": "stddev: 0.0004281447444981701",
            "extra": "mean: 3.7745241155382283 msec\nrounds: 251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 162.77434423794597,
            "unit": "iter/sec",
            "range": "stddev: 0.00009300232944529476",
            "extra": "mean: 6.143474296773606 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 85.0306462596318,
            "unit": "iter/sec",
            "range": "stddev: 0.018080242837448936",
            "extra": "mean: 11.760465714286225 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 131.2718269326041,
            "unit": "iter/sec",
            "range": "stddev: 0.0004349927133277246",
            "extra": "mean: 7.617780778760755 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.95720578998222,
            "unit": "iter/sec",
            "range": "stddev: 0.0002340585741968336",
            "extra": "mean: 62.66761318750369 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7940524469313073,
            "unit": "iter/sec",
            "range": "stddev: 0.0029721814434234793",
            "extra": "mean: 1.2593626577999941 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 99.58494106521911,
            "unit": "iter/sec",
            "range": "stddev: 0.000660937413871332",
            "extra": "mean: 10.041678885415925 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.834468247613993,
            "unit": "iter/sec",
            "range": "stddev: 0.0006126393820247195",
            "extra": "mean: 171.39522533333698 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4735.189615703274,
            "unit": "iter/sec",
            "range": "stddev: 0.000021247399760315384",
            "extra": "mean: 211.18478480433126 usec\nrounds: 2198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11443.212977914862,
            "unit": "iter/sec",
            "range": "stddev: 0.000013210000647310843",
            "extra": "mean: 87.3880440685651 usec\nrounds: 4788"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 102.40024327020622,
            "unit": "iter/sec",
            "range": "stddev: 0.00005766993494544171",
            "extra": "mean: 9.765601800000354 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 272.7594610652894,
            "unit": "iter/sec",
            "range": "stddev: 0.0002784758907562796",
            "extra": "mean: 3.666233963413771 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6581304282748517,
            "unit": "iter/sec",
            "range": "stddev: 0.001757709106185174",
            "extra": "mean: 603.0888661999995 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11918735.184742542,
            "unit": "iter/sec",
            "range": "stddev: 3.4276545042617913e-9",
            "extra": "mean: 83.90152012765927 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 278.9276455462127,
            "unit": "iter/sec",
            "range": "stddev: 0.00030127051070030016",
            "extra": "mean: 3.5851591477845104 msec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 86.86020039807067,
            "unit": "iter/sec",
            "range": "stddev: 0.0007809861647685585",
            "extra": "mean: 11.512752623377692 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.361261039553405,
            "unit": "iter/sec",
            "range": "stddev: 0.0005662001850753516",
            "extra": "mean: 37.93445231999954 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.7215122388350499,
            "unit": "iter/sec",
            "range": "stddev: 0.0025152857921526936",
            "extra": "mean: 1.385977875599997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13472.175843658624,
            "unit": "iter/sec",
            "range": "stddev: 0.000002108552707723641",
            "extra": "mean: 74.22705965278071 usec\nrounds: 6739"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.103711032105615,
            "unit": "iter/sec",
            "range": "stddev: 0.00015704902628845688",
            "extra": "mean: 20.788416913043886 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 112.05351385949736,
            "unit": "iter/sec",
            "range": "stddev: 0.0000759710777367351",
            "extra": "mean: 8.924307373831121 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 116.08134184891426,
            "unit": "iter/sec",
            "range": "stddev: 0.00016655458691684538",
            "extra": "mean: 8.61464886666757 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 492381.967253386,
            "unit": "iter/sec",
            "range": "stddev: 1.6561561966199147e-7",
            "extra": "mean: 2.030943589543334 usec\nrounds: 2145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17886756844444332,
            "unit": "iter/sec",
            "range": "stddev: 0.07296356677838463",
            "extra": "mean: 5.590728429400002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2306.2127075124295,
            "unit": "iter/sec",
            "range": "stddev: 0.00008035301002675314",
            "extra": "mean: 433.61134761877145 usec\nrounds: 1260"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1190.1144394458918,
            "unit": "iter/sec",
            "range": "stddev: 0.0000371268165018189",
            "extra": "mean: 840.2553291140576 usec\nrounds: 237"
          }
        ]
      }
    ]
  }
}