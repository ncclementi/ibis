window.BENCHMARK_DATA = {
  "lastUpdate": 1679999642930,
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
          "distinct": false,
          "id": "19686bb185d578ad073d17a0a70b68eb0e422f12",
          "message": "chore(deps): pre-commit.ci autoupdate\n\nupdates:\n- [github.com/adrienverge/yamllint: v1.29.0 → v1.30.0](https://github.com/adrienverge/yamllint/compare/v1.29.0...v1.30.0)",
          "timestamp": "2023-03-28T05:59:15-04:00",
          "tree_id": "4cf4f724c0300bed2ee8fc9f98431ff173114cc2",
          "url": "https://github.com/ibis-project/ibis/commit/19686bb185d578ad073d17a0a70b68eb0e422f12"
        },
        "date": 1679999315943,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.49122336204943395,
            "unit": "iter/sec",
            "range": "stddev: 0.17550552327982843",
            "extra": "mean: 2.0357337970000002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 59489.295871043876,
            "unit": "iter/sec",
            "range": "stddev: 0.000018619302323064948",
            "extra": "mean: 16.809746784828647 usec\nrounds: 10730"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 214.83430364893294,
            "unit": "iter/sec",
            "range": "stddev: 0.0007979868590997505",
            "extra": "mean: 4.654750116788282 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9763.359960714872,
            "unit": "iter/sec",
            "range": "stddev: 0.00005423449267193817",
            "extra": "mean: 102.42375616834066 usec\nrounds: 1378"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 94.4599283508754,
            "unit": "iter/sec",
            "range": "stddev: 0.0009718600296595472",
            "extra": "mean: 10.586499666667729 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.09949433711479165,
            "unit": "iter/sec",
            "range": "stddev: 0.19189345975779493",
            "extra": "mean: 10.05082328300001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 76.12807248690277,
            "unit": "iter/sec",
            "range": "stddev: 0.001511824246328303",
            "extra": "mean: 13.135758824999044 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 422.4759420098471,
            "unit": "iter/sec",
            "range": "stddev: 0.0004694736835402011",
            "extra": "mean: 2.3669986869375204 msec\nrounds: 444"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 42.00788432911618,
            "unit": "iter/sec",
            "range": "stddev: 0.0022884969478627524",
            "extra": "mean: 23.80505507407541 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 203.46851670606537,
            "unit": "iter/sec",
            "range": "stddev: 0.0007207899069195542",
            "extra": "mean: 4.914765272725804 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 29.969329641632328,
            "unit": "iter/sec",
            "range": "stddev: 0.003076291016268902",
            "extra": "mean: 33.36744638461434 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5425769627454236,
            "unit": "iter/sec",
            "range": "stddev: 0.025582578788264202",
            "extra": "mean: 1.843056503799994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.173399893933603,
            "unit": "iter/sec",
            "range": "stddev: 0.003070663859774967",
            "extra": "mean: 49.570226399998774 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 208.72799238706688,
            "unit": "iter/sec",
            "range": "stddev: 0.0008019902384881657",
            "extra": "mean: 4.790924248174591 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 67.56087158523925,
            "unit": "iter/sec",
            "range": "stddev: 0.0014155143186931555",
            "extra": "mean: 14.801466833333166 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 137.44238541191433,
            "unit": "iter/sec",
            "range": "stddev: 0.001254105617539029",
            "extra": "mean: 7.275775933333837 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1637166.8510861152,
            "unit": "iter/sec",
            "range": "stddev: 0.000004361154930559218",
            "extra": "mean: 610.8112922861762 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3153.4151432896892,
            "unit": "iter/sec",
            "range": "stddev: 0.00018101739821030946",
            "extra": "mean: 317.1165084711254 usec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1543405.6728104386,
            "unit": "iter/sec",
            "range": "stddev: 0.000006241416577288792",
            "extra": "mean: 647.9177947940717 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4256.462156326066,
            "unit": "iter/sec",
            "range": "stddev: 0.00009180083823232255",
            "extra": "mean: 234.936894367491 usec\nrounds: 284"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 223.81927276143315,
            "unit": "iter/sec",
            "range": "stddev: 0.0005494019714557253",
            "extra": "mean: 4.467890488885158 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 381442.63958645595,
            "unit": "iter/sec",
            "range": "stddev: 0.00001069818236701618",
            "extra": "mean: 2.621626153500191 usec\nrounds: 1950"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.44662571163667,
            "unit": "iter/sec",
            "range": "stddev: 0.0027502029431923044",
            "extra": "mean: 28.211429999998927 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 236.71186340595924,
            "unit": "iter/sec",
            "range": "stddev: 0.0006952368836105225",
            "extra": "mean: 4.224545342220583 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.42705592501508,
            "unit": "iter/sec",
            "range": "stddev: 0.014091801947712921",
            "extra": "mean: 225.88375139999926 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 135.0957909530765,
            "unit": "iter/sec",
            "range": "stddev: 0.0037465037421536254",
            "extra": "mean: 7.402155114864645 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 76.97686148519232,
            "unit": "iter/sec",
            "range": "stddev: 0.001501211976842713",
            "extra": "mean: 12.990916759997617 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 101.69348265162091,
            "unit": "iter/sec",
            "range": "stddev: 0.0013045579417439927",
            "extra": "mean: 9.833471859998895 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 83.83130159182815,
            "unit": "iter/sec",
            "range": "stddev: 0.0014377987550103308",
            "extra": "mean: 11.928718521739853 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 56.045116623774305,
            "unit": "iter/sec",
            "range": "stddev: 0.0025248709587084575",
            "extra": "mean: 17.842767759997855 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 126.54094438539427,
            "unit": "iter/sec",
            "range": "stddev: 0.001248664948935996",
            "extra": "mean: 7.902580503543507 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 32.68018801985753,
            "unit": "iter/sec",
            "range": "stddev: 0.0021879374403757736",
            "extra": "mean: 30.599579151514302 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 559.9202175575427,
            "unit": "iter/sec",
            "range": "stddev: 0.0003714953855851212",
            "extra": "mean: 1.7859687302633083 msec\nrounds: 456"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5845108779299808,
            "unit": "iter/sec",
            "range": "stddev: 0.06816576534877584",
            "extra": "mean: 1.7108321466000007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3987.155662199288,
            "unit": "iter/sec",
            "range": "stddev: 0.0001300046366353022",
            "extra": "mean: 250.80535718246995 usec\nrounds: 1789"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 94.74403999968914,
            "unit": "iter/sec",
            "range": "stddev: 0.0012257138288093784",
            "extra": "mean: 10.554753628864477 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 239.2091996118664,
            "unit": "iter/sec",
            "range": "stddev: 0.0005835193165308831",
            "extra": "mean: 4.180441227271232 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 98.60715508306201,
            "unit": "iter/sec",
            "range": "stddev: 0.0013959050031415593",
            "extra": "mean: 10.141251911766922 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3547.7825530789496,
            "unit": "iter/sec",
            "range": "stddev: 0.0001484958827003072",
            "extra": "mean: 281.8662037593449 usec\nrounds: 2341"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 97.21890942786766,
            "unit": "iter/sec",
            "range": "stddev: 0.0014023080862817015",
            "extra": "mean: 10.286064777778217 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1522899.2974282897,
            "unit": "iter/sec",
            "range": "stddev: 0.000007183935970920308",
            "extra": "mean: 656.6422360878973 nsec\nrounds: 106383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5316932392466102,
            "unit": "iter/sec",
            "range": "stddev: 0.04107703294031676",
            "extra": "mean: 1.8807837417999962 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 86.24972751379599,
            "unit": "iter/sec",
            "range": "stddev: 0.0011324231511187241",
            "extra": "mean: 11.594239527771796 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 138.26970730817936,
            "unit": "iter/sec",
            "range": "stddev: 0.000794533417258614",
            "extra": "mean: 7.2322421119412095 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 4287.412475061429,
            "unit": "iter/sec",
            "range": "stddev: 0.00009313921971008356",
            "extra": "mean: 233.2409129787943 usec\nrounds: 2011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8756.062179428258,
            "unit": "iter/sec",
            "range": "stddev: 0.00009501324803383389",
            "extra": "mean: 114.20658961849637 usec\nrounds: 5953"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4764061.559577871,
            "unit": "iter/sec",
            "range": "stddev: 3.995857917180255e-7",
            "extra": "mean: 209.9049282832593 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 12.955430771478792,
            "unit": "iter/sec",
            "range": "stddev: 0.003575112038594072",
            "extra": "mean: 77.18770742857016 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.9965331176719163,
            "unit": "iter/sec",
            "range": "stddev: 0.014459749767158242",
            "extra": "mean: 500.86822560001565 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 242.04126982635304,
            "unit": "iter/sec",
            "range": "stddev: 0.00047827383617200526",
            "extra": "mean: 4.131526828947092 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.2117706963577541,
            "unit": "iter/sec",
            "range": "stddev: 0.017011275026363532",
            "extra": "mean: 825.2386387999991 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 38.461305030983524,
            "unit": "iter/sec",
            "range": "stddev: 0.0026180264979870083",
            "extra": "mean: 26.000157800012857 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1466399.6017062652,
            "unit": "iter/sec",
            "range": "stddev: 0.000005942412654144412",
            "extra": "mean: 681.9423565284834 nsec\nrounds: 102041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 78.35542948953508,
            "unit": "iter/sec",
            "range": "stddev: 0.0013296455417172606",
            "extra": "mean: 12.762357459013826 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.305855034668326,
            "unit": "iter/sec",
            "range": "stddev: 0.008417835029811633",
            "extra": "mean: 120.39699655556684 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 103.11453241247239,
            "unit": "iter/sec",
            "range": "stddev: 0.0013151341156971152",
            "extra": "mean: 9.69795407692741 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 302.7645461500943,
            "unit": "iter/sec",
            "range": "stddev: 0.0005316721462492186",
            "extra": "mean: 3.3028966327657594 msec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6106374.315515882,
            "unit": "iter/sec",
            "range": "stddev: 2.9403962049186547e-7",
            "extra": "mean: 163.76329853532206 nsec\nrounds: 72993"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 146111.1909565213,
            "unit": "iter/sec",
            "range": "stddev: 0.00002182776598918483",
            "extra": "mean: 6.844102723778171 usec\nrounds: 36496"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 83.73966009592318,
            "unit": "iter/sec",
            "range": "stddev: 0.0013537200667975572",
            "extra": "mean: 11.941772857144477 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 69.18733726687836,
            "unit": "iter/sec",
            "range": "stddev: 0.023179476695169402",
            "extra": "mean: 14.453511863632944 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 86.75128396650902,
            "unit": "iter/sec",
            "range": "stddev: 0.001591485887170751",
            "extra": "mean: 11.527206910113946 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 216.29136679866053,
            "unit": "iter/sec",
            "range": "stddev: 0.0006007365952460163",
            "extra": "mean: 4.6233930406056 msec\nrounds: 197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 92.96178751133785,
            "unit": "iter/sec",
            "range": "stddev: 0.0009639561293088443",
            "extra": "mean: 10.757108127659848 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1456.0415958846982,
            "unit": "iter/sec",
            "range": "stddev: 0.00025873342608902705",
            "extra": "mean: 686.7935660810534 usec\nrounds: 1309"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 11027.595885404031,
            "unit": "iter/sec",
            "range": "stddev: 0.00006534375646443214",
            "extra": "mean: 90.68159645962234 usec\nrounds: 5593"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6263.086156826932,
            "unit": "iter/sec",
            "range": "stddev: 0.00009826708815287195",
            "extra": "mean: 159.665694349418 usec\nrounds: 3504"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 3841.912388240188,
            "unit": "iter/sec",
            "range": "stddev: 0.0001648615384839722",
            "extra": "mean: 260.28703909566667 usec\nrounds: 2123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10114076.595386673,
            "unit": "iter/sec",
            "range": "stddev: 1.338406533092533e-7",
            "extra": "mean: 98.87210073692714 nsec\nrounds: 91744"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 222.1713205962813,
            "unit": "iter/sec",
            "range": "stddev: 0.0008964994960873772",
            "extra": "mean: 4.501030994082041 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 231.754370411969,
            "unit": "iter/sec",
            "range": "stddev: 0.000635176024854957",
            "extra": "mean: 4.31491323431092 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 92.07320279622698,
            "unit": "iter/sec",
            "range": "stddev: 0.002089993284759781",
            "extra": "mean: 10.86092336999684 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 89.22948193224845,
            "unit": "iter/sec",
            "range": "stddev: 0.002032612554679425",
            "extra": "mean: 11.207058231709736 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 981.8884087092412,
            "unit": "iter/sec",
            "range": "stddev: 0.00019453091726032973",
            "extra": "mean: 1.0184456717587365 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 45.29001205305253,
            "unit": "iter/sec",
            "range": "stddev: 0.03285468299632253",
            "extra": "mean: 22.079923468083962 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4172.58130397281,
            "unit": "iter/sec",
            "range": "stddev: 0.00010300609273329856",
            "extra": "mean: 239.65979980974302 usec\nrounds: 2108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 182.57274028834817,
            "unit": "iter/sec",
            "range": "stddev: 0.003952457074121683",
            "extra": "mean: 5.477268941796237 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3991.5862690571566,
            "unit": "iter/sec",
            "range": "stddev: 0.00018903136519699047",
            "extra": "mean: 250.52696662277265 usec\nrounds: 2277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3736.7960050083366,
            "unit": "iter/sec",
            "range": "stddev: 0.00017345110045036445",
            "extra": "mean: 267.6089352107325 usec\nrounds: 3195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 109.47553101453747,
            "unit": "iter/sec",
            "range": "stddev: 0.0011511889266757277",
            "extra": "mean: 9.1344612876754 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 83.34334859512633,
            "unit": "iter/sec",
            "range": "stddev: 0.0016005673400628815",
            "extra": "mean: 11.99855797560883 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 95.15242364221915,
            "unit": "iter/sec",
            "range": "stddev: 0.0010218900044398499",
            "extra": "mean: 10.5094537976256 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 692252.5986677548,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019643979734319838",
            "extra": "mean: 1.4445594020513715 usec\nrounds: 22272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 122.14123386839184,
            "unit": "iter/sec",
            "range": "stddev: 0.0012263926958543234",
            "extra": "mean: 8.187243311112349 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 92.15461332407219,
            "unit": "iter/sec",
            "range": "stddev: 0.0016655893735350897",
            "extra": "mean: 10.851328695649629 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4864994.244897865,
            "unit": "iter/sec",
            "range": "stddev: 7.189651081004986e-7",
            "extra": "mean: 205.55008899533317 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 57.33052749851041,
            "unit": "iter/sec",
            "range": "stddev: 0.0007631093918377095",
            "extra": "mean: 17.442714093743206 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 591.9898460001882,
            "unit": "iter/sec",
            "range": "stddev: 0.0005335539313881391",
            "extra": "mean: 1.6892181627042335 msec\nrounds: 547"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nicholas.b.crews@gmail.com",
            "name": "Nick Crews",
            "username": "NickCrews"
          },
          "committer": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "fb7b34b424cb333cb956d0c20f145e5d2f52f5bc",
          "message": "docs(nth): improve docstring for nth()",
          "timestamp": "2023-03-28T12:15:45+02:00",
          "tree_id": "4227754c75169374a8339e60c0f08f44ee84c9fa",
          "url": "https://github.com/ibis-project/ibis/commit/fb7b34b424cb333cb956d0c20f145e5d2f52f5bc"
        },
        "date": 1679999558683,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.368255832945714,
            "unit": "iter/sec",
            "range": "stddev: 0.0005300665464547759",
            "extra": "mean: 96.4482374000113 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.547261500750452,
            "unit": "iter/sec",
            "range": "stddev: 0.00037805722302488074",
            "extra": "mean: 180.26912916665574 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6729029590277779,
            "unit": "iter/sec",
            "range": "stddev: 0.022962759654073475",
            "extra": "mean: 1.4860983840000017 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5526042.683338946,
            "unit": "iter/sec",
            "range": "stddev: 1.2432324642027235e-8",
            "extra": "mean: 180.96132391686385 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 106.8910785160314,
            "unit": "iter/sec",
            "range": "stddev: 0.0005412337927462277",
            "extra": "mean: 9.355317711103655 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 138.631974782931,
            "unit": "iter/sec",
            "range": "stddev: 0.000051118411000293085",
            "extra": "mean: 7.213343109090043 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.18008370655458236,
            "unit": "iter/sec",
            "range": "stddev: 0.07545051035358806",
            "extra": "mean: 5.552973220799993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 122.34593968058083,
            "unit": "iter/sec",
            "range": "stddev: 0.0005817739316150949",
            "extra": "mean: 8.173544644070631 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5781.1801669619235,
            "unit": "iter/sec",
            "range": "stddev: 0.00005565788423129378",
            "extra": "mean: 172.97506237822572 usec\nrounds: 3078"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 40.9460942393349,
            "unit": "iter/sec",
            "range": "stddev: 0.0008435878591380811",
            "extra": "mean: 24.42235379410985 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1901321.0413790666,
            "unit": "iter/sec",
            "range": "stddev: 1.0097648414480078e-7",
            "extra": "mean: 525.9501042889 nsec\nrounds: 151516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9134694169683594,
            "unit": "iter/sec",
            "range": "stddev: 0.004162973295004538",
            "extra": "mean: 1.09472740020002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 68.67340376373129,
            "unit": "iter/sec",
            "range": "stddev: 0.00016034395293668032",
            "extra": "mean: 14.56167810525992 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5508.5153576725015,
            "unit": "iter/sec",
            "range": "stddev: 0.000060145694686433474",
            "extra": "mean: 181.53711754786272 usec\nrounds: 2382"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 300.07278722062523,
            "unit": "iter/sec",
            "range": "stddev: 0.00021477950126727095",
            "extra": "mean: 3.332524782611363 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 157.82051023728465,
            "unit": "iter/sec",
            "range": "stddev: 0.0036664354354693654",
            "extra": "mean: 6.336312045224607 msec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 188.66496686505766,
            "unit": "iter/sec",
            "range": "stddev: 0.014833352870436833",
            "extra": "mean: 5.30040111111486 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 305.9047597265485,
            "unit": "iter/sec",
            "range": "stddev: 0.00022534838756093227",
            "extra": "mean: 3.2689913059669635 msec\nrounds: 268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5753.506515361571,
            "unit": "iter/sec",
            "range": "stddev: 0.00005328036575601529",
            "extra": "mean: 173.80705094016156 usec\nrounds: 2552"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 116.02529917842323,
            "unit": "iter/sec",
            "range": "stddev: 0.0006228228982338113",
            "extra": "mean: 8.618809924051169 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 187.48927382148548,
            "unit": "iter/sec",
            "range": "stddev: 0.00013899128641457452",
            "extra": "mean: 5.333638450976838 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.747485367769441,
            "unit": "iter/sec",
            "range": "stddev: 0.0019286093057113614",
            "extra": "mean: 572.2508573999903 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8458715824895617,
            "unit": "iter/sec",
            "range": "stddev: 0.0024966820165801293",
            "extra": "mean: 1.1822125494000033 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 325.12544922243103,
            "unit": "iter/sec",
            "range": "stddev: 0.000045217041418757487",
            "extra": "mean: 3.0757358502436425 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5277.935619320526,
            "unit": "iter/sec",
            "range": "stddev: 0.000047361234332653734",
            "extra": "mean: 189.4680178248818 usec\nrounds: 2188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11705.614933874418,
            "unit": "iter/sec",
            "range": "stddev: 0.000018776180897617193",
            "extra": "mean: 85.42908729264103 usec\nrounds: 4525"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 284.091734512644,
            "unit": "iter/sec",
            "range": "stddev: 0.0002654200935414491",
            "extra": "mean: 3.5199897727242506 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 85.694616534985,
            "unit": "iter/sec",
            "range": "stddev: 0.016811319277624436",
            "extra": "mean: 11.669344475002674 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5572.486631589808,
            "unit": "iter/sec",
            "range": "stddev: 0.000048371740368822986",
            "extra": "mean: 179.4530998658859 usec\nrounds: 2243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 102.46109842503584,
            "unit": "iter/sec",
            "range": "stddev: 0.0005913954044827765",
            "extra": "mean: 9.759801674697401 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 96.1035811471157,
            "unit": "iter/sec",
            "range": "stddev: 0.00012437622700033917",
            "extra": "mean: 10.405439506663091 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 300.6305489798909,
            "unit": "iter/sec",
            "range": "stddev: 0.00019413930247949357",
            "extra": "mean: 3.3263419283011384 msec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 492550.47092617,
            "unit": "iter/sec",
            "range": "stddev: 2.712095925788242e-7",
            "extra": "mean: 2.030248794848667 usec\nrounds: 2074"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2503097.282654696,
            "unit": "iter/sec",
            "range": "stddev: 1.990162338962371e-8",
            "extra": "mean: 399.50504797769526 nsec\nrounds: 117661"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1740.8476473513783,
            "unit": "iter/sec",
            "range": "stddev: 0.00000523329849143099",
            "extra": "mean: 574.4328066396017 usec\nrounds: 1205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 312.9927247561517,
            "unit": "iter/sec",
            "range": "stddev: 0.00023824774756220384",
            "extra": "mean: 3.1949624413126094 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 729.5705153360279,
            "unit": "iter/sec",
            "range": "stddev: 0.00003992153116664062",
            "extra": "mean: 1.370669426709791 msec\nrounds: 614"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7314723.968423297,
            "unit": "iter/sec",
            "range": "stddev: 5.3399170919789274e-9",
            "extra": "mean: 136.7105586372329 nsec\nrounds: 71943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 108.53211049922571,
            "unit": "iter/sec",
            "range": "stddev: 0.01099705359177232",
            "extra": "mean: 9.21386302542356 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 106.3481916176838,
            "unit": "iter/sec",
            "range": "stddev: 0.0006496234931765438",
            "extra": "mean: 9.403074794115428 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 237.88500246611036,
            "unit": "iter/sec",
            "range": "stddev: 0.00403859001969582",
            "extra": "mean: 4.203711834008797 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.53470248003707,
            "unit": "iter/sec",
            "range": "stddev: 0.024121278169410097",
            "extra": "mean: 26.64201216279395 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.37927005051333,
            "unit": "iter/sec",
            "range": "stddev: 0.0003296244962809759",
            "extra": "mean: 21.106277047617066 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6490093.589896185,
            "unit": "iter/sec",
            "range": "stddev: 1.8783077633345052e-8",
            "extra": "mean: 154.08098298563917 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5511.416357435394,
            "unit": "iter/sec",
            "range": "stddev: 0.00013258832688166727",
            "extra": "mean: 181.4415633199097 usec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.048235209166364,
            "unit": "iter/sec",
            "range": "stddev: 0.023182002951807664",
            "extra": "mean: 26.991839000001356 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1687161.5292672485,
            "unit": "iter/sec",
            "range": "stddev: 1.0543311340148749e-7",
            "extra": "mean: 592.7114758444677 nsec\nrounds: 135136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 312.21993908252097,
            "unit": "iter/sec",
            "range": "stddev: 0.00020544604068698538",
            "extra": "mean: 3.2028703962295504 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 101.68933240081857,
            "unit": "iter/sec",
            "range": "stddev: 0.0006956815958740417",
            "extra": "mean: 9.833873193880367 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 683.4615847481464,
            "unit": "iter/sec",
            "range": "stddev: 0.000020027989132105568",
            "extra": "mean: 1.4631400247147717 msec\nrounds: 526"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.020751162140076,
            "unit": "iter/sec",
            "range": "stddev: 0.0005099743912106114",
            "extra": "mean: 38.43086595651357 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 113.58841366762779,
            "unit": "iter/sec",
            "range": "stddev: 0.000711373926624545",
            "extra": "mean: 8.80371481308041 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 72.36235161899813,
            "unit": "iter/sec",
            "range": "stddev: 0.00008452583525059717",
            "extra": "mean: 13.819340826085844 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 103.50686024526874,
            "unit": "iter/sec",
            "range": "stddev: 0.0007049115169685911",
            "extra": "mean: 9.661195380001004 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5405.319152144565,
            "unit": "iter/sec",
            "range": "stddev: 0.00005084652487981551",
            "extra": "mean: 185.00295206495792 usec\nrounds: 3317"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8047.728976311167,
            "unit": "iter/sec",
            "range": "stddev: 0.000014437060945285447",
            "extra": "mean: 124.25865768386866 usec\nrounds: 4379"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 151.79090598565554,
            "unit": "iter/sec",
            "range": "stddev: 0.00006880647061600387",
            "extra": "mean: 6.588009956897559 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1872281.0222300172,
            "unit": "iter/sec",
            "range": "stddev: 9.92346670406979e-8",
            "extra": "mean: 534.1078546045029 nsec\nrounds: 147059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 104.83119575762561,
            "unit": "iter/sec",
            "range": "stddev: 0.00018174282796858801",
            "extra": "mean: 9.539145220779933 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 138075.015245601,
            "unit": "iter/sec",
            "range": "stddev: 4.0405008790452236e-7",
            "extra": "mean: 7.242439902840129 usec\nrounds: 40002"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 120.63711937092363,
            "unit": "iter/sec",
            "range": "stddev: 0.0007383863947894298",
            "extra": "mean: 8.289322599997556 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.229141779078446,
            "unit": "iter/sec",
            "range": "stddev: 0.0024915782722904805",
            "extra": "mean: 65.66358199999058 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 121.80129008775828,
            "unit": "iter/sec",
            "range": "stddev: 0.0006741194148406781",
            "extra": "mean: 8.210093663864287 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1161.2959949798299,
            "unit": "iter/sec",
            "range": "stddev: 0.00013367651350761506",
            "extra": "mean: 861.1069049776312 usec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 338.30754504645023,
            "unit": "iter/sec",
            "range": "stddev: 0.00020816825189165893",
            "extra": "mean: 2.9558903271362107 msec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 100.80609316507325,
            "unit": "iter/sec",
            "range": "stddev: 0.000708097491731619",
            "extra": "mean: 9.920035273685961 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5654.109870722903,
            "unit": "iter/sec",
            "range": "stddev: 0.000019345049155921523",
            "extra": "mean: 176.86249876006488 usec\nrounds: 2420"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 59.77824169141886,
            "unit": "iter/sec",
            "range": "stddev: 0.0008902816229023977",
            "extra": "mean: 16.728494711538993 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5656.98493411348,
            "unit": "iter/sec",
            "range": "stddev: 0.00004609502306043757",
            "extra": "mean: 176.77261149657144 usec\nrounds: 2018"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 309.08343485182087,
            "unit": "iter/sec",
            "range": "stddev: 0.00021702705163963062",
            "extra": "mean: 3.2353723533563508 msec\nrounds: 283"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13602.934104011678,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018028096406501689",
            "extra": "mean: 73.51355173477516 usec\nrounds: 6456"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 94.92458089727623,
            "unit": "iter/sec",
            "range": "stddev: 0.00008399621300784498",
            "extra": "mean: 10.53467911627824 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.577221139109683,
            "unit": "iter/sec",
            "range": "stddev: 0.0017737992649554787",
            "extra": "mean: 388.0148214000201 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 165.2178295927094,
            "unit": "iter/sec",
            "range": "stddev: 0.00006842857091168909",
            "extra": "mean: 6.052615522581149 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 91.0474042255626,
            "unit": "iter/sec",
            "range": "stddev: 0.0007068654421825165",
            "extra": "mean: 10.983289512818846 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.22781078599532,
            "unit": "iter/sec",
            "range": "stddev: 0.00024998282749895656",
            "extra": "mean: 8.458246780954985 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 91.25492161050052,
            "unit": "iter/sec",
            "range": "stddev: 0.01417951551559013",
            "extra": "mean: 10.958313067959855 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 157.9458916105418,
            "unit": "iter/sec",
            "range": "stddev: 0.00014372721684653754",
            "extra": "mean: 6.331282123284154 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12859695.741742583,
            "unit": "iter/sec",
            "range": "stddev: 4.578361685736199e-9",
            "extra": "mean: 77.76233746756935 nsec\nrounds: 101011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 120.38401736017958,
            "unit": "iter/sec",
            "range": "stddev: 0.0007310354214393724",
            "extra": "mean: 8.306750529915265 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 72037.32720508313,
            "unit": "iter/sec",
            "range": "stddev: 0.000001383857012581656",
            "extra": "mean: 13.881692155972127 usec\nrounds: 13718"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 544.715081939378,
            "unit": "iter/sec",
            "range": "stddev: 0.000024498515250589666",
            "extra": "mean: 1.8358221263851315 msec\nrounds: 451"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 119.34295047248625,
            "unit": "iter/sec",
            "range": "stddev: 0.0007513618003699366",
            "extra": "mean: 8.379212982760498 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11951.567407907107,
            "unit": "iter/sec",
            "range": "stddev: 0.000002500927687881525",
            "extra": "mean: 83.67103375398312 usec\nrounds: 5303"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 53.33771754032412,
            "unit": "iter/sec",
            "range": "stddev: 0.0004770627492896918",
            "extra": "mean: 18.7484588039221 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 316.55593461357404,
            "unit": "iter/sec",
            "range": "stddev: 0.00022108160832819249",
            "extra": "mean: 3.1589993762736412 msec\nrounds: 295"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9120452398604536,
            "unit": "iter/sec",
            "range": "stddev: 0.008753426002269483",
            "extra": "mean: 1.0964368391999983 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 750429.7753050354,
            "unit": "iter/sec",
            "range": "stddev: 4.590795368644978e-7",
            "extra": "mean: 1.332569725919416 usec\nrounds: 24331"
          }
        ]
      }
    ]
  }
}