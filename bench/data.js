window.BENCHMARK_DATA = {
  "lastUpdate": 1680109305253,
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
          "id": "cab190ba026399224864293103736c17117e2236",
          "message": "test(duckdb): make remaining tests pass through extension load on init",
          "timestamp": "2023-03-29T12:29:31-04:00",
          "tree_id": "35d20c9a47ba1f27b78ae632e436d6677a2f42ed",
          "url": "https://github.com/ibis-project/ibis/commit/cab190ba026399224864293103736c17117e2236"
        },
        "date": 1680109210948,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 3009672.5889382134,
            "unit": "iter/sec",
            "range": "stddev: 1.7026380351613897e-7",
            "extra": "mean: 332.26205523996595 nsec\nrounds: 181786"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 179.21791473305777,
            "unit": "iter/sec",
            "range": "stddev: 0.01057364542164308",
            "extra": "mean: 5.57979932692267 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 103.08659248978591,
            "unit": "iter/sec",
            "range": "stddev: 0.0006704395153286018",
            "extra": "mean: 9.700582547619689 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 91.93274332449772,
            "unit": "iter/sec",
            "range": "stddev: 0.0007387543187087949",
            "extra": "mean: 10.877517235293093 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.03295766815738,
            "unit": "iter/sec",
            "range": "stddev: 0.0009157959822485234",
            "extra": "mean: 27.002974187499085 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.6992807619748626,
            "unit": "iter/sec",
            "range": "stddev: 0.01610993067673271",
            "extra": "mean: 1.4300407710000003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 84.82630406246497,
            "unit": "iter/sec",
            "range": "stddev: 0.012559903603857996",
            "extra": "mean: 11.788796070421897 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 82.13385371714125,
            "unit": "iter/sec",
            "range": "stddev: 0.00008563689827027571",
            "extra": "mean: 12.17524753488221 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4571.1090142547055,
            "unit": "iter/sec",
            "range": "stddev: 0.000059228816144712186",
            "extra": "mean: 218.76529237906274 usec\nrounds: 2165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 646.1931079670669,
            "unit": "iter/sec",
            "range": "stddev: 0.00001636456739326024",
            "extra": "mean: 1.5475250163933423 msec\nrounds: 549"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 49.31092975565508,
            "unit": "iter/sec",
            "range": "stddev: 0.0003299709561700682",
            "extra": "mean: 20.279479720929782 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 92.8992422088752,
            "unit": "iter/sec",
            "range": "stddev: 0.0006857790075218456",
            "extra": "mean: 10.764350453490183 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1467283.4085176357,
            "unit": "iter/sec",
            "range": "stddev: 1.1551362592615494e-7",
            "extra": "mean: 681.531593824998 nsec\nrounds: 109879"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 32.79026148629734,
            "unit": "iter/sec",
            "range": "stddev: 0.02290730676522514",
            "extra": "mean: 30.496859575758133 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 86.38673352819785,
            "unit": "iter/sec",
            "range": "stddev: 0.00014657461600623168",
            "extra": "mean: 11.57585151282038 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6831.4166129887535,
            "unit": "iter/sec",
            "range": "stddev: 0.000015881785080858544",
            "extra": "mean: 146.38252307708382 usec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.145275096972153,
            "unit": "iter/sec",
            "range": "stddev: 0.08654536400369049",
            "extra": "mean: 6.883492221599994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 138.9620214678346,
            "unit": "iter/sec",
            "range": "stddev: 0.004688954981486432",
            "extra": "mean: 7.196210802326799 msec\nrounds: 172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 421343.95407263044,
            "unit": "iter/sec",
            "range": "stddev: 6.317030685558661e-7",
            "extra": "mean: 2.3733578952164622 usec\nrounds: 950"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4727.6510669669915,
            "unit": "iter/sec",
            "range": "stddev: 0.00006723686629146713",
            "extra": "mean: 211.5215327516856 usec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 101.59469649644605,
            "unit": "iter/sec",
            "range": "stddev: 0.0007564342615063983",
            "extra": "mean: 9.84303348979424 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4487.661416578353,
            "unit": "iter/sec",
            "range": "stddev: 0.00007433668495460328",
            "extra": "mean: 222.83321025641382 usec\nrounds: 2925"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 145267.40346886663,
            "unit": "iter/sec",
            "range": "stddev: 3.821003424526385e-7",
            "extra": "mean: 6.883856778057698 usec\nrounds: 32893"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4381.605441640905,
            "unit": "iter/sec",
            "range": "stddev: 0.00006362039793235393",
            "extra": "mean: 228.22684819961822 usec\nrounds: 639"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 235.68521091327597,
            "unit": "iter/sec",
            "range": "stddev: 0.0009508899135862436",
            "extra": "mean: 4.242947600000093 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.92667347232471,
            "unit": "iter/sec",
            "range": "stddev: 0.0007209116419661489",
            "extra": "mean: 10.424629186047035 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.6948916023649302,
            "unit": "iter/sec",
            "range": "stddev: 0.0074271256069271645",
            "extra": "mean: 1.4390733699999998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 133.27995737602663,
            "unit": "iter/sec",
            "range": "stddev: 0.0001579022788198491",
            "extra": "mean: 7.503003599998692 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.4739670924288135,
            "unit": "iter/sec",
            "range": "stddev: 0.001507677802438772",
            "extra": "mean: 678.441198000013 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 4438.078536329248,
            "unit": "iter/sec",
            "range": "stddev: 0.00007569507170765941",
            "extra": "mean: 225.3227363630892 usec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4845.779007378683,
            "unit": "iter/sec",
            "range": "stddev: 0.00005549698903486537",
            "extra": "mean: 206.36516821697748 usec\nrounds: 2580"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 267.5197378362311,
            "unit": "iter/sec",
            "range": "stddev: 0.00031193470606669435",
            "extra": "mean: 3.738041940711586 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7084405942029384,
            "unit": "iter/sec",
            "range": "stddev: 0.003934259005780735",
            "extra": "mean: 1.4115509588000008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 270.12777173627524,
            "unit": "iter/sec",
            "range": "stddev: 0.00025076211736771095",
            "extra": "mean: 3.7019518340242943 msec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 101.94107944164794,
            "unit": "iter/sec",
            "range": "stddev: 0.0007471312600428296",
            "extra": "mean: 9.80958810204094 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 79.85737397846559,
            "unit": "iter/sec",
            "range": "stddev: 0.0007758721788245741",
            "extra": "mean: 12.522325117648633 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 244.70616602221165,
            "unit": "iter/sec",
            "range": "stddev: 0.0002297809298237045",
            "extra": "mean: 4.086533724324835 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 114.91738914897326,
            "unit": "iter/sec",
            "range": "stddev: 0.0005019588882162675",
            "extra": "mean: 8.701903231578376 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4407.577760625877,
            "unit": "iter/sec",
            "range": "stddev: 0.00006578988568777021",
            "extra": "mean: 226.88198695738944 usec\nrounds: 2070"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 33.345703516137476,
            "unit": "iter/sec",
            "range": "stddev: 0.0007483387342357389",
            "extra": "mean: 29.988870965522 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.38745716299723,
            "unit": "iter/sec",
            "range": "stddev: 0.0004938811396441886",
            "extra": "mean: 46.75637652381207 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.834843603905545,
            "unit": "iter/sec",
            "range": "stddev: 0.0003691845824531731",
            "extra": "mean: 206.8319229999929 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 52.37486623716677,
            "unit": "iter/sec",
            "range": "stddev: 0.0003436049643963961",
            "extra": "mean: 19.09312752173427 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 87.06343142693869,
            "unit": "iter/sec",
            "range": "stddev: 0.0008754820189924087",
            "extra": "mean: 11.485878555558351 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 567.3118410999302,
            "unit": "iter/sec",
            "range": "stddev: 0.00007095070862733763",
            "extra": "mean: 1.7626989735683185 msec\nrounds: 454"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1504.75966798088,
            "unit": "iter/sec",
            "range": "stddev: 0.000009610810196149031",
            "extra": "mean: 664.5579498697106 usec\nrounds: 1157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 37.69563989988891,
            "unit": "iter/sec",
            "range": "stddev: 0.0002545941441277429",
            "extra": "mean: 26.528266999997182 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9361586.175062366,
            "unit": "iter/sec",
            "range": "stddev: 3.986182537125195e-9",
            "extra": "mean: 106.81950486806784 nsec\nrounds: 93450"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 264.2800221586103,
            "unit": "iter/sec",
            "range": "stddev: 0.00030360971977663357",
            "extra": "mean: 3.783865279835038 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 63.82675441382792,
            "unit": "iter/sec",
            "range": "stddev: 0.0001121031277836111",
            "extra": "mean: 15.667411090910056 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 76.16956533982692,
            "unit": "iter/sec",
            "range": "stddev: 0.00024108896686627572",
            "extra": "mean: 13.128603209674983 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 101.94917130358844,
            "unit": "iter/sec",
            "range": "stddev: 0.0007521669159117505",
            "extra": "mean: 9.808809500002297 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 299.29998247862596,
            "unit": "iter/sec",
            "range": "stddev: 0.00001481187333396402",
            "extra": "mean: 3.341129497297626 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 654071.2014343848,
            "unit": "iter/sec",
            "range": "stddev: 1.8862019248363944e-7",
            "extra": "mean: 1.5288855369369418 usec\nrounds: 20120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1645201.7073387264,
            "unit": "iter/sec",
            "range": "stddev: 9.92297734053006e-8",
            "extra": "mean: 607.828204614252 nsec\nrounds: 99991"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 99.98722455366097,
            "unit": "iter/sec",
            "range": "stddev: 0.000455452544484406",
            "extra": "mean: 10.001277707866787 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 62680.59731343417,
            "unit": "iter/sec",
            "range": "stddev: 5.293645368861178e-7",
            "extra": "mean: 15.95390029548542 usec\nrounds: 11494"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 254.41736778052586,
            "unit": "iter/sec",
            "range": "stddev: 0.00024936234238931546",
            "extra": "mean: 3.9305492731245213 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 89.64633957025845,
            "unit": "iter/sec",
            "range": "stddev: 0.0008297481784736764",
            "extra": "mean: 11.154945141025761 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 268.0708550927991,
            "unit": "iter/sec",
            "range": "stddev: 0.00033609676930893673",
            "extra": "mean: 3.730357034351333 msec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 127.85656342660992,
            "unit": "iter/sec",
            "range": "stddev: 0.019174262878206116",
            "extra": "mean: 7.821264495146573 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 451.22094825826036,
            "unit": "iter/sec",
            "range": "stddev: 0.000022661469893963528",
            "extra": "mean: 2.2162091628503937 msec\nrounds: 393"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 258.91289546278114,
            "unit": "iter/sec",
            "range": "stddev: 0.00025381613762276927",
            "extra": "mean: 3.8623027957437155 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4652.542922587454,
            "unit": "iter/sec",
            "range": "stddev: 0.000040058638407670696",
            "extra": "mean: 214.93622232803867 usec\nrounds: 2096"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5833445729540621,
            "unit": "iter/sec",
            "range": "stddev: 0.002294852847091102",
            "extra": "mean: 1.7142526841999939 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 91.26911156865357,
            "unit": "iter/sec",
            "range": "stddev: 0.0008577000626960929",
            "extra": "mean: 10.95660933707884 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 85.06251777666755,
            "unit": "iter/sec",
            "range": "stddev: 0.000947429516580274",
            "extra": "mean: 11.756059262500429 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 101.5227150430751,
            "unit": "iter/sec",
            "range": "stddev: 0.0008552354409743829",
            "extra": "mean: 9.850012379748806 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10297.023961746258,
            "unit": "iter/sec",
            "range": "stddev: 0.0000258531820668127",
            "extra": "mean: 97.11543876318332 usec\nrounds: 4850"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 94.09682234909833,
            "unit": "iter/sec",
            "range": "stddev: 0.00007994340480617422",
            "extra": "mean: 10.627351434780755 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.57113403516531,
            "unit": "iter/sec",
            "range": "stddev: 0.0009320864333995789",
            "extra": "mean: 9.943210938143979 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2274018.9395510326,
            "unit": "iter/sec",
            "range": "stddev: 1.7872816767204974e-8",
            "extra": "mean: 439.7500753435463 nsec\nrounds: 107516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5118851.772468135,
            "unit": "iter/sec",
            "range": "stddev: 1.7119195563063387e-8",
            "extra": "mean: 195.35631122951625 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1005.95704659842,
            "unit": "iter/sec",
            "range": "stddev: 0.000012236060421343304",
            "extra": "mean: 994.0782296634202 usec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.926721764001272,
            "unit": "iter/sec",
            "range": "stddev: 0.00207924746129103",
            "extra": "mean: 112.0232069999866 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4813.879129526387,
            "unit": "iter/sec",
            "range": "stddev: 0.000059576207531610535",
            "extra": "mean: 207.73267734671703 usec\nrounds: 2216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12120.57831364409,
            "unit": "iter/sec",
            "range": "stddev: 0.000010098571240029741",
            "extra": "mean: 82.5043140783393 usec\nrounds: 5938"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 86.8508694047051,
            "unit": "iter/sec",
            "range": "stddev: 0.0008614589294337976",
            "extra": "mean: 11.513989518518574 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11134.167276580269,
            "unit": "iter/sec",
            "range": "stddev: 0.000001934231246516808",
            "extra": "mean: 89.81363178397824 usec\nrounds: 5896"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.117052171048943,
            "unit": "iter/sec",
            "range": "stddev: 0.0025855356626436625",
            "extra": "mean: 472.3549157999855 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1640025.5502571545,
            "unit": "iter/sec",
            "range": "stddev: 1.2623388546055307e-7",
            "extra": "mean: 609.7465980595247 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 260.10700352562446,
            "unit": "iter/sec",
            "range": "stddev: 0.0003793866219473181",
            "extra": "mean: 3.844571604937523 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 50.93068085549255,
            "unit": "iter/sec",
            "range": "stddev: 0.0006748879874189095",
            "extra": "mean: 19.634530369569102 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 205.120330534073,
            "unit": "iter/sec",
            "range": "stddev: 0.004440440254854354",
            "extra": "mean: 4.875187151835677 msec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4651913.857004831,
            "unit": "iter/sec",
            "range": "stddev: 2.179258406092901e-8",
            "extra": "mean: 214.96528756527255 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 134.53580628311872,
            "unit": "iter/sec",
            "range": "stddev: 0.00030763272174190676",
            "extra": "mean: 7.432965450815289 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.076989270476085,
            "unit": "iter/sec",
            "range": "stddev: 0.0002567858610028675",
            "extra": "mean: 76.4702011538466 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 138.51179796126073,
            "unit": "iter/sec",
            "range": "stddev: 0.00009990174379873017",
            "extra": "mean: 7.219601613139713 msec\nrounds: 137"
          }
        ]
      }
    ]
  }
}